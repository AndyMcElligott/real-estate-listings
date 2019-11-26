$('document').ready(function(){
    $('#typeFilterIn').on('change', function(){ getHouse() });
    $('#cityFilterIn').on('change', function(){ getHouse() });
    populateCities();
    getHouse();
})

function deleteHouse() {
    console.log('deleting a house');
    let id = $(this).closest('tr').data('id');
    $.ajax({
        type: 'DELETE',
        url: `/house/${id}`
    }).then(function (response) {
        getHouse();
    }).catch(function (err) {
        alert('error deleting houses. see console for details');
        console.log(err);
    })
}

function addHouse() {
    console.log('in POST CLIENT');
    let objectToSend = {
        cost: $('#costIn').val(),
        sqft: $('#sqftIn').val(),
        type: $('#typeIn').val(),
        city: $('#cityIn').val(),
        image_path: $('#imageIn').val(),
    } // end object, fill in with input fields from HTML
    $.ajax({
        type: 'POST',
        url: '/house',
        data: objectToSend
    }).then( function( response){
        console.log('back from POST CLIENT:', response);
        // display function goes here ----!
        $('#costIn').val('');
        $('#sqftIn').val('');
        $('#cityIn').val('');
        $('#imageIn').val('');
    }).catch( function(err){
        alert('unable to add house, see console for details');
        console.log(err);
    })
}

function getHouse(){
    let url = '/house';
    let queried = false;

    let query = $('#typeFilterIn').val();
    if(query){
        url += `?type=${query}`;
        queried = true;
    }

    query = $('#cityFilterIn').val();
    if(query) url += `${(queried) ? '&' : '?'}city=${query}`;

    $.ajax({
        type: 'GET',
        url: url
    }).then( function( response ){
        console.log(response);
        displayHouse(response);
    }).catch( function(err){
        console.log(err);
    });
}

function populateCities(){
    $.ajax({
        type: 'GET',
        url: '/house/cities'
    }).then( function(response){
        let el = $('#cityFilterIn');
        for(let opt of response){
            el.append(`<option val="${opt.city}">${opt.city}</option>`);
        }
    }).catch( function(err){
        console.log(err);
    });
}