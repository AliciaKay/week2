function onReady() {
  console.log('ready!');
  $('#addPerson').on('click', addPerson);
  // on ready get all people
  getList();
};

var id = 0;

// event listeners
function addPerson() {
    var personToAdd = {
        idProp: id++,
        person: $('#name').val(),
        details: $('#details').val()
    }
    console.log('addPerson', personToAdd);   

    // build post request and send to server
    $.ajax({
        type: 'POST',
        url: '/list',
        data: personToAdd, 
        success: function(serverResp) {
            console.log(serverResp);
            getList();
        }
    });
}

// ajax functions
function getList() {
    console.log('in getList');
    $.ajax({
        type: 'GET',
        url: '/list',
        success: function(serverResp) {
           $("#list > tbody").html("");
            console.log('list resp ->', serverResp);
            for (var i = 0; i < serverResp.length; i++) {
                $('#list').append('<tr><td>'+ serverResp[i].idProp +'</td><td>' + serverResp[i].person + '</td><td>' + serverResp[i].details + '</td><td><input type="checkbox"</td></tr>');
            }
        }
    });
}

$(document).ready(onReady);