//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCE8YSqhXAe_FMj-Wybz5YbjvGB7WRDjZs",
      authDomain: "birdie-61aa5.firebaseapp.com",
      databaseURL: "https://birdie-61aa5-default-rtdb.firebaseio.com",
      projectId: "birdie-61aa5",
      storageBucket: "birdie-61aa5.appspot.com",
      messagingSenderId: "844286947580",
      appId: "1:844286947580:web:cf6b8f7da2960f6257a779"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");


     room_name=localStorage.getItem("room_name");
     function send(){
      msging= document.getElementById("msging").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msging,
            like:0
      });
      document.getElementById("msging").value="";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
   name = message_data['name'];
   message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class= 'user_tick' src='tick.png' ></h4>";
   message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
   like_button = "<button class='btn btn-danger' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
row= name_with_tag +like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
      } });  }); }
      getData();
function updateLike(message_id)
{
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes) +1;

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
            window.location="index.html";
      }

