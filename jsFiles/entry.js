"use strict";
console.log("Iam entry form boss");

const accessButton = document.getElementById("accessButton");
if (accessButton) {
  accessButton.addEventListener("click", accessControl);
}

function accessControl(event) {
  event.preventDefault();
  const userAge = document.getElementById("userAge").value;

  if (userAge >= 18) {
    location.replace("./home.html");
  } else {
    alert(" You are too young to use this site");
  }
}
