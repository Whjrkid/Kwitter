const firebaseConfig = {
    apiKey: "AIzaSyDKYclgwCAD_9GJynRH6YPi_1ylcr5sFPg",
    authDomain: "chatapp-dd603.firebaseapp.com",
    databaseURL: "https://chatapp-dd603-default-rtdb.firebaseio.com",
    projectId: "chatapp-dd603",
    storageBucket: "chatapp-dd603.appspot.com",
    messagingSenderId: "104995111987",
    appId: "1:104995111987:web:08e6b47c4964622bc1cf46"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
var y=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+y+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}