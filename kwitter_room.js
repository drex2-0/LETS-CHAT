
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBcc3qHBcLxamI6I9dDO-ph07I0aqgL6X0",
      authDomain: "lets-chat-web-apppp.firebaseapp.com",
      databaseURL: "https://lets-chat-web-apppp-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-apppp",
      storageBucket: "lets-chat-web-apppp.appspot.com",
      messagingSenderId: "441107004649",
      appId: "1:441107004649:web:13954123c92d58cb514478"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname=",+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}

user_name=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+ user_name + " !";
function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname", room_name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}