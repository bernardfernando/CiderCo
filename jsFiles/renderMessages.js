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
  // create the table headers
  createTableHeaders();

  for (let i = 0; i < messageLog.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = messageLog[i].userName;
    tr.appendChild(td);
    let td1 = document.createElement("td");
    td1.textContent = messageLog[i].userTelephone;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = messageLog[i].userEmail;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = messageLog[i].userCategory;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.textContent = messageLog[i].complaintsCategory;
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    td5.textContent = messageLog[i].briefDescription;
    tr.appendChild(td5);
    let td6 = document.createElement("td");
    td6.textContent = messageLog[i].date;
    tr.appendChild(td6);
    table.appendChild(tr);
  }
  viewMessageButton.removeEventListener("click", renderMessages);
}

function displayAsOrderlyList() {
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
      Email: ${messageLog[i].userEmail},
      User type: ${messageLog[i].userCategory},
      Complaint-Feedback: ${messageLog[i].complaintsCategory},
      Description: ${messageLog[i].briefDescription}
      Date: ${messageLog[i].date},
      `;
      ul.appendChild(li);
    }
  }
}
checkLocalStorage();

// ============================
/////chart data
const users = ["consumer", "customer", "authority"];
const complaintCategories = [
  "Name",
  "Telephone",
  "E-mail Address",
  "User Category",
  "Complaint",
  "Brief Description",
  "Date",
];

///* introduce a table here  */
const complaintsTable = document.getElementById("complaintsTable");
const table = document.createElement("table");
// table headers
complaintsTable.appendChild(table);
function createTableHeaders() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  table.appendChild(tr);

  for (let i = 0; i < complaintCategories.length; i++) {
    const th = document.createElement("th");
    th.textContent = complaintCategories[i];
    tr.appendChild(th);
  }
}
