
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
  const app = initializeApp(firebaseConfig);

function fly() 
{
    var user_name = document.getElementById("user_name").value;
 localStorage.setItem("user_name", user_name);
 window.location = "kwitter_room.html";
 
}