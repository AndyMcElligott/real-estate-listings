console.log( 'js' );

$(document).ready(function(){

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

function getHouse(query){
    let url = '/house';
    if(query){
        if(query[0] === '/'){
            query = query.split('/', 1)[1];
        }
        url += `?type=${query}`;
    }
    $.ajax({
        type: 'GET',
        url: url
    }).then( function( response ){
        displayHouse(response);
    }).catch( function(err){
        console.log(err);
    });
}

function displayHouse(house){ //need VAR to be called in function
    console.log('in displayHouse', house ) // call same VAR again in log
    $('#houseOut').empty();
    for (let i=0; i<house.length; i++) {
        let taco = house[i];
        let $card = $(`card`);
    }
}