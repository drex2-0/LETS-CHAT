function adduser()
{
    username=document.getElementById("user_name").value;
    if (username.length==0){
        document.getElementById("user_name").placeholder="Enter User Name";
    }
    else{
        localStorage.setItem("username" ,username);
        window.location="kwitter_room.html";
    }
}