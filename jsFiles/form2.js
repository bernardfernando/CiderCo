"use strict";
console.log("yest it works");
// import CustomerComplaintFeedback from "/jsFiles/renderMessages.js";

let messageLog = [];

// selecting the form
const form = document.getElementById("messageForm");

//const submitButton = document.getElementById("submitButton");

// add an event listener
form.addEventListener("submit", onFormSubmit);
console.log("check submit");
// create fallback function important to prevent the default action of the submit event to avoid triggering a page reload to do this event.preventDefault() is used
function onFormSubmit(event) {
  event.preventDefault();
  collectFormData();
}

function collectFormData() {
  const userName = document.getElementById("userName").value;
  const userTelephone = document.getElementById("telephoneNumber").value;
  const userEmail = document.getElementById("email").value;
  const userCategory = document.getElementById("userType").value;
  const messageCategory = document.getElementById("messageRelatedTo").value;
  const briefDescription = document.getElementById(
    "briefDescriptionOfMessage"
  ).value;
  const messageDate = document.getElementById("messageDate").value;
  // console.log(
  //   `Name: ${userName},
  //   Telephone: ${userTelephone},
  //   email: ${userEmail},
  //   ComplainanantCategory: ${userCategory},
  //   ComplaintCategory : ${messageCategory},
  //   Brief Description : ${briefDescription},
  //   Date: ${messageDate}`
  // );
  // constructor function

  const ccf = new CustomerComplaintFeedback(
    userName,
    userTelephone,
    userEmail,
    userCategory,
    messageCategory,
    briefDescription,
    messageDate
  );
  console.log(ccf);
}

function CustomerComplaintFeedback(
  userName,
  userTelephone,
  userEmail,
  userCategory,
  complaintsCategory,
  briefDescription,
  date
) {
  this.userName = userName;
  this.userTelephone = userTelephone;
  this.userEmail = userEmail;
  this.userCategory = userCategory;
  this.complaintsCategory = complaintsCategory;
  this.briefDescription = briefDescription;
  this.date = date;
  messageLog.push(this);
  setLocalStorage();
}

function generateId() {
  let complaintsId = this.userName + messageLog.length(pushComplaint) + 1;
  console.log("check submit  ss");
}

// passing information to local storage
function setLocalStorage() {
  localStorage.setItem("messages", JSON.stringify(messageLog));
  console.log("messageLog:  " + messageLog);
}
