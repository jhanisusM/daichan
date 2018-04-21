$(document).ready(function()
{
  var config = {
    apiKey: "AIzaSyCYlHy09JFeEnK5T77FSHR6pZnWoi6ow_Q",
    authDomain: "daichan-4b27d.firebaseapp.com",
    databaseURL: "https://daichan-4b27d.firebaseio.com",
    projectId: "daichan-4b27d",
    storageBucket: "daichan-4b27d.appspot.com",
    messagingSenderId: "307635370280"
  };

  firebase.initializeApp(config);


  $('#comment-button').on('click', function() {
   event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var phoneNumber = $('#phoneNumber').val();
    var comment = $('#comment').val();
  
  
    var comment = {
      name: name,
      email: email,
      comment: comment,
      phoneNumber: phoneNumber,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    
      };
    
      console.log(comment);
    
      var connectionsRef = daichanDb.ref();
    
      connectionsRef.push(comment);
      return false;
    
    });
    
    // Create a variable to reference the database.
    var daichanDb = firebase.database();
  });