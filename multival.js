  var config = {
    apiKey: "AIzaSyAi9tBGcAb65ALUMf8rx3F8hC_-Cb9ZBRw",
    authDomain: "hotel-multi.firebaseapp.com",
    databaseURL: "https://hotel-multi-default-rtdb.firebaseio.com",
    projectId: "hotel-multi",
    storageBucket: "hotel-multi.appspot.com",
    messagingSenderId: "663745625531",
    appId: "1:663745625531:web:1ada8df5190b0a948f989e"
  };


console.log("Hello");
firebase.initializeApp(config);
var database = firebase.database();


var form = document.getElementById('my-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var name  = form.elements['name'].value;
  var phone = form.elements['phone'].value;
  var email = form.elements['email'].value;
  var adhar = form.elements['adhar'].value;
 var dropdown1 = form.elements['dropdown1'].value; 
 var dropdown2 = form.elements['dropdown2 '].value;
 var dropdown3 = form.elements['dropdown3'].value;


 var passenger = form.elements['passenger'].value;
var price = form.elements['price'].value;

 console.log(passenger);
  // location.href = "availabletrain.html";
  // Store the form data in Firebase
  database.ref('users').push({
    name: name,
    phone : phone,
    email: email,
    adhar : adhar,
    price : price,
    passenger : passenger,
    dropdown1: dropdown1,
    dropdown2: dropdown2,
    dropdown3: dropdown3

  });
});
