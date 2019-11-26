$('document').ready(function(){
    $('.orderInputs').on('change', function(){ getHouse() });
    $('#houseOut').on('click', '.delete', deleteHouse);
    $('#submitButton').on('click', addHouse);

    populateCities();
    getHouse();
})

function deleteHouse() {
    console.log('deleting a house');
    let id = $(this).closest('.card').data('id');
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

        getHouse();
        $('#cityFilterIn').empty();
        $('#cityFilterIn').append('<option value="">Any</option>');
        populateCities();
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
    if(query){
        url += `${(queried) ? '&' : '?'}city=${query}`;
        queried = true;
    }
    url += `${(queried)?'&':'?'}order=${$('#orderByIn').val()}&reverse=${document.getElementById("orderReverseIn").checked}`;
    console.log(url);
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

function displayHouse(house){ //need VAR to be called in function
    console.log('in displayHouse', house ) // call same VAR again in log
    $('#houseOut').empty();
    for (let i=0; i<house.length; i++) {
        let taco = house[i];
        let newEl = $(`
        <div class="card" style="width: 18rem;">
          <img src="${taco.image_path}" class="card-img-top" alt="A $${taco.cost} house in ${taco.city}">
          <div class="card-body">
              <h5>${taco.city}</h5>
              <h5>${taco.cost}</h5>
              <h5>${taco.type}</h5>
              <p class="card-text">${taco.sqft}</p>
              <a href="#" class="btn btn-outline-danger delete">DELETE</a>
          </div>
        </div>`);
        $(`#houseOut`).append(newEl);
        newEl.data('id', taco.id);
    }
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