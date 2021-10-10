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
    room_name=localStorage.getItem("roomname");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
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
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>";
 row=name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      buttonid=message_id;
      likes=document.getElementById(buttonid).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}