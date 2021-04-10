

//ADD YOUR FIREBASE LINKS 
const config = {
      apiKey: "AIzaSyDW-y3EC-cJjhfmqVwH2In_j-Ey5tLssS0",
      authDomain: "kwitter-4fdf1.firebaseapp.com",
      databaseURL: "https://kwitter-4fdf1-default-rtdb.firebaseio.com",
      projectId: "kwitter-4fdf1",
      storageBucket: "kwitter-4fdf1.appspot.com",
      messagingSenderId: "153118752410",
      appId: "1:153118752410:web:5e601b641c900239b7e923",
      measurementId: "G-MPHYBFTFBN"
  


};
// Initialize Firebase
firebase.initializeApp(config);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}


