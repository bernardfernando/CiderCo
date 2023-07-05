"use strict";
let messageLog = [];

const viewMessageButton = document.getElementById("messages");
if (viewMessageButton) {
  viewMessageButton.addEventListener("click", renderMessages);
}

// passing information to local storage
function setLocalStorage() {
  localStorage.setItem("messages", JSON.stringify(messageLog));
}

function checkLocalStorage() {
  const locallySavedMessages = JSON.parse(localStorage.getItem("messages"));
  if (locallySavedMessages) {
    messageLog = locallySavedMessages;
    console.log(locallySavedMessages);
  }
}

// constructor function
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

// counting clicks
function renderMessages() {
  //console.log("your results are in heree")

  let ul = document.querySelector("ul");
  if (messageLog.length == 0) {
    let li = document.createElement("li");
    li.textContent = "No messages to display";
    ul.appendChild(li);
  } else {
    for (let i = 0; i < messageLog.length; i++) {
      let li = document.createElement("li");
      li.textContent = `Name: ${messageLog[i].userName},
      Tel : ${messageLog[i].userTelephone},
      \r\nEmail: ${messageLog[i].userEmail},
      \nUser type: ${messageLog[i].userCategory},
      \nComplaint-Feedback: ${messageLog[i].complaintsCategory},
      \nDescription: ${messageLog[i].briefDescription}
      \nDate: ${messageLog[i].date},
      `;
      ul.appendChild(li);
    }
  }
}

checkLocalStorage();
