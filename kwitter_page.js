//YOUR FIREBASE LINKS
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
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}