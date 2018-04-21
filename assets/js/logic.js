var config = {
  apiKey: "AIzaSyCYlHy09JFeEnK5T77FSHR6pZnWoi6ow_Q",
  authDomain: "daichan-4b27d.firebaseapp.com",
  databaseURL: "https://daichan-4b27d.firebaseio.com",
  projectId: "daichan-4b27d",
  storageBucket: "daichan-4b27d.appspot.com",
  messagingSenderId: "307635370280"
};
firebase.initializeApp(config);
var daichanDb = firebase.database().ref();
$('#comment-button').on('click', function() {
  var name = $('#name').val();
  var rating = $('#rating').val();
  var comment = $('#comment').val();


  var comment = {
    name: name,
    rating: rating,
    comment: comment,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  
    };
  
    console.log(comment);
  
    var connectionsRef = daichanDb.ref();
  
    connectionsRef.push(comment);
    return false;
  
  });
  
  // Create a variable to reference the database.
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }