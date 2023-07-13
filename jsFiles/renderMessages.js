"use strict";
let messagesLog = [];

const viewMessageButton = document.getElementById("messages");
if (viewMessageButton) {
  viewMessageButton.addEventListener("click", renderMessages);
}

// // passing information to local storage
// function setLocalStorage() {
//   localStorage.setItem("messages", JSON.stringify(messagesLog));
//   console.log("messagesLog:  " + messagesLog);
// }

function checkLocalStorage() {
  const locallySavedMessages = JSON.parse(localStorage.getItem("messages"));
  if (locallySavedMessages) {
    messagesLog = locallySavedMessages;
    console.log(locallySavedMessages);
  }
  console.log(messagesLog);
}

// // constructor function
// function CustomerComplaintFeedback(
//   userName,
//   userTelephone,
//   userEmail,
//   userCategory,
//   complaintsCategory,
//   briefDescription,
//   date
// ) {
//   this.userName = userName;
//   this.userTelephone = userTelephone;
//   this.userEmail = userEmail;
//   this.userCategory = userCategory;
//   this.complaintsCategory = complaintsCategory;
//   this.briefDescription = briefDescription;
//   this.date = date;
//   messagesLog.push(this);
//   setLocalStorage();
// }

// counting clicks
function renderMessages() {
  console.log("message");
  // create the table headers
  createTableHeaders();

  for (let i = 0; i < messagesLog.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = messagesLog[i].userName;
    tr.appendChild(td);
    let td1 = document.createElement("td");
    td1.textContent = messagesLog[i].userTelephone;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = messagesLog[i].userEmail;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = messagesLog[i].userCategory;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.textContent = messagesLog[i].complaintsCategory;
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    td5.textContent = messagesLog[i].briefDescription;
    tr.appendChild(td5);
    let td6 = document.createElement("td");
    td6.textContent = messagesLog[i].date;
    tr.appendChild(td6);
    cTable.appendChild(tr);
  }
  viewMessageButton.removeEventListener("click", renderMessages);
}

// displayAsOrderlyList();

function displayAsOrderlyList() {
  console.log("Message 2");
  let ul = document.querySelector("ul");
  if (messagesLog.length == 0) {
    let li = document.createElement("li");
    li.textContent = "No messages to display";
    ul.appendChild(li);
  } else {
    // for (let i = 0; i < messagesLog.length; i++) {
    //   let li = document.createElement("li");
    //   li.textContent = `Name: ${messagesLog[i].userName},
    //   Tel : ${messagesLog[i].userTelephone},
    //   Email: ${messagesLog[i].userEmail},
    //   User type: ${messagesLog[i].userCategory},
    //   Complaint-Feedback: ${messagesLog[i].complaintsCategory},
    //   Description: ${messagesLog[i].briefDescription}
    //   Date: ${messagesLog[i].date},
    //   `;
    //   ul.appendChild(li);
    // }
    for (let i = 0; i < messagesLog.length; i++) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.textContent = messagesLog[i].userName;
      tr.appendChild(td);
      let td1 = document.createElement("td");
      td1.textContent = messagesLog[i].userTelephone;
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.textContent = messagesLog[i].userEmail;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.textContent = messagesLog[i].userCategory;
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      td4.textContent = messagesLog[i].complaintsCategory;
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      td5.textContent = messagesLog[i].briefDescription;
      tr.appendChild(td5);
      let td6 = document.createElement("td");
      td6.textContent = messagesLog[i].date;
      tr.appendChild(td6);
      cTable.appendChild(tr);
    }
  }
}

checkLocalStorage();

// ============================
/////chart data
const users = ["consumer", "consumer", "authority"];
const complaintCategories = [
  "Food Safety",
  "Cider Quality",
  "Packaging Quality",
  "Delivery issue",
  "Feedback",
];
const formCategories = [
  "Name",
  "Telephone",
  "E-mail Address",
  "User Category",
  "Complaint",
  "Brief Description",
  "Date",
];

///* introduce a table here  */
const complaintTable = document.getElementById("complaintsTable");
console.log("complaintsTable " + complaintsTable);
const cTable = document.createElement("table");
// table headers
complaintTable.appendChild(cTable);

function createTableHeaders() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  cTable.appendChild(tr);

  for (let i = 0; i < formCategories.length; i++) {
    const th = document.createElement("th");
    th.textContent = formCategories[i];
    tr.appendChild(th);
  }
  console.log("Message 10");
}

//complaints stats

// for (let i = 0; i < messagesLog.length; i++) {
//   if (
//     this.userCategory == "consumer" &&
//     this.complainsCategory == "Food Safety issue"
//   ) {
//     let conFoodSafetyComplaints = +conFoodSafetyComplaints;
//   } else if (
//     this.userCategory == "consumer" &&
//     this.complainsCategory == "Food quality issue"
//   ) {
//     let conFoodQualityComplaints = +conFoodQualityComplaints;
//   } else if (
//     this.userCategory == "consumer" &&
//     this.complainsCategory == "Packaging issue"
//   ) {
//     let conPackComplaints = +conPackComplaints;
//   } else if (
//     this.userCategory == "consumer" &&
//     this.complainsCategory == "Delivery issue"
//   ) {
//     let conDeliveryComplaints = +conDeliveryComplaints;
//   } else if (
//     this.userCategory == "consumer" &&
//     this.complainsCategory == "Feedback"
//   ) {
//     let conFeedback = +conFeedback;
//   } else if (
//     this.userCategory == "customer" &&
//     this.complainsCategory == "Food safety issue"
//   ) {
//     cusFoodQualityComplaints = +cusFoodQualityComplaints;
//   } else if (
//     this.userCategory == "customer" &&
//     this.complainsCategory == "Food quality issue"
//   ) {
//     let conFoodQualityComplaints = +conFoodQualityComplaints;
//   } else if (
//     this.userCategory == "customer" &&
//     this.complainsCategory == "Packaging issue"
//   ) {
//     let cusPackComplaints = +cusPackComplaints;
//   } else if (
//     this.userCategory == "customer" &&
//     this.complainsCategory == "Delivery issue"
//   ) {
//     let cusDeliveryComplaints = +cusDeliveryComplaints;
//   } else if (
//     this.userCategory == "customer" &&
//     this.complainsCategory == "Feedback"
//   ) {
//     let cusFeedback = +cusFeedback;
//   } else if (
//     this.userCategory == "authority" &&
//     this.complainsCategory == "Food Safety issue"
//   ) {
//     let authFoodSafetyComplaints = +authFoodSafetyComplaints;
//   } else if (
//     this.userCategory == "authority" &&
//     this.complainsCategory == "Food quality issue"
//   ) {
//     let authFoodQualityComplaints = +authFoodQualityComplaints;
//   } else if (
//     this.userCategory == "authority" &&
//     this.complainsCategory == "Packaging issue"
//   ) {
//     let authPackComplaints = +authPackComplaints;
//   } else if (
//     this.userCategory == "authority" &&
//     this.complainsCategory == "Delivery issue"
//   ) {
//     let authDeliveryComplaints = +authDeliveryComplaints;
//   } else if (
//     this.userCategory == "authority" &&
//     this.complainsCategory == "Feedback"
//   ) {
//     let authFeedback = +authFeedback;
//   }
//   console.log(conFoodSafetyComplaints);
// }

// //complaint stats
// ///* introduce a table here  */
// const statsTable = document.getElementById("stats");
// const sTable = document.createElement("table");
// // table headers
// statsTable.appendChild(sTable);
// function createStatsTableHeaders() {
//   const tr = document.createElement("tr");
//   sTable.appendChild(tr);
//   const userTypeHeader = document.createElement("th");
//   userTypeHeader.textContent = "User Type";
//   tr.appendChild(userTypeHeader);
//   for (let i = 0; i < complaintCategories.length; i++) {
//     const categoryHeader = document.createElement("th");
//     categoryHeader.textContent = complaintCategories[i];
//     tr.appendChild(categoryHeader);
//   }
//   const subTotalsHeader = document.createElement("th");
//   subTotalsHeader.textContent = "Sub Totals";
//   tr.appendChild(subTotalsHeader);
// }
// createStatsTableHeaders();
// // const consumer = [];
// // const consumer = [];
// // const authority = [];
