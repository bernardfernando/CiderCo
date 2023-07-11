"use strict";
console.log("yest it works");

// selecting the form
const form = document.getElementById("messageForm");

//const submitButton = document.getElementById("submitButton");

// add an event listener
form.addEventListener("submit", onFormSubmit);

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

  const ccf = new CustomerComplaintFeedback(
    userName,
    userTelephone,
    userEmail,
    userCategory,
    messageCategoryCategory,
    briefDescription,
    messageDate
  );
  console.log(ccf);
}

function generateId() {
  let complaintsId = this.userName + messageLog.length(pushComplaint) + 1;
}
