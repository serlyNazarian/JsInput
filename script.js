// how to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// alert(username);

//DIFFICULT WAY html texbox

let username;
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = username;
};
