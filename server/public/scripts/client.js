function addHouse() {
    console.log('in POST CLIENT');
    let objectToSend = {
        cost: $('').val(),
        sqft: $('').val(),
        type: $('').val(),
        city: $('').val(),
        image_path: $('').val(),
    } // end object, fill in with input fields from HTML
    $.ajax({
        type: 'POST',
        url: '/house',
        data: objectToSend
    }).then( function( response){
        console.log('back from POST CLIENT:', response);
        // display function goes here ----!
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