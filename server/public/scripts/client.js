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