var firebaseConfig = {
      apiKey: "AIzaSyALR1aHNR1aXeBboxEZEr9cLsWa0Y7QcSI",
      authDomain: "kwiiter-a5295.firebaseapp.com",
      databaseURL: "https://kwiiter-a5295-default-rtdb.firebaseio.com",
      projectId: "kwiiter-a5295",
      storageBucket: "kwiiter-a5295.appspot.com",
      messagingSenderId: "1050092305163",
      appId: "1:1050092305163:web:dbc0e05d722b414096000e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{

Room_name = document.getElementById("room_name").value



 firebase.database().ref("/").child(Room_name).update({
      purpose  :  "adding room name"
 });

 localStorage.setItem("room_name",  Room_name);

 window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("Room Name - " + Room_name);
row = "<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirecToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name",  name);
window.location = "kwitter_page.html";

}
