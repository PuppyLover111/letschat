
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAFZy3suKfimcjmTIMgz91U5CyGeQl9yxA",
  authDomain: "letschat-9b524.firebaseapp.com",
  databaseURL: "https://letschat-9b524-default-rtdb.firebaseio.com",
  projectId: "letschat-9b524",
  storageBucket: "letschat-9b524.appspot.com",
  messagingSenderId: "381440108808",
  appId: "1:381440108808:web:accdb1109a7d23f009e4bd"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome " + user_name +" 🦠";

function addRoom() {
 
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row  = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
            window.location="index.html";}
