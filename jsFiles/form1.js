//js for the complaints form
"use strict";
console.log("my form my form");

const form = document.getElementById("complaintsForm");
// const formData = new FormData(form);
const submitButton = document.getElementById("submitButton");
// form.addEventListener("submit,onFormSubmit);

submitButton.addEventListener("click", collectFormData);
// console.log(formData);

const complainstLog = [];

function collectFormData(event) {
  event.preventDefault();

  const userName = document.getElementById("complainantName").ariaValueMax;
  const userTelephone = document.getElementById("telephoneNumber").value;
  const userEmail = document.getElementById("email").value;
  const userCategory = document.getElementById("userType").value;
  const messageCategory = document.getElementById("messageRelatedTo").value;
  const briefDescription = document.getElementById(
    "briefDescriptionOfMessage"
  ).value;
  const messageDate = document.getElementById("messageDate").value;
}

function saveToLocalStorage() {
  localStorage.setItem("userName", userName);
  localStorage.setItem("userTelephone", userTelephone);
  localStorage.setItem("userEmail", userEmail);
  localStorage.setItem("userCategory", userCategory);
  localStorage.setItem("messageCategory", messageCategory);
  localStorage.setItem("briefDescription", briefDescription);
  localStorage.setItem("messageDate", messageDate);
}

// function collectFormData(event) {
//   event.preventDefault(); // this func doesn't have an event.
//   event.preventDefault(); // added this on 5/07/2023
//   let formData = document.form["complaintsForm"];
//   let userName = formData["complainantName"].value;
//   let userTelephone = formData["telephoneNumber"].value;
//   let userCategory = formData["userType"].value;
//   let messageCategory = formData["messageRelatedTo"].value;
//   let briefDescription = formData["briefDescriptionOfIssue"].value;
//   let date = formData["complaintDate"].value;

// function collectFormData() {
//   let formData = document.forms.complaintsForm;
//   let userName = formData.complainantName.value;
//   let userTelephone = formData.telephoneNumber.value;
//   let complainantCategory = formData.userType.value;
//   let complaintCategory = formData.messageRelatedTo.value;
//   let briefDescription = formData.briefDescriptionOfIssue.value;
//   let date = formData.complaintDate.value;

const ccf = new CustomerComplaintFeedback(
  userName,
  userTelephone,
  complainantCategory,
  complaintCategory,
  briefDescription,
  date
);

console.log(
  "username = " +
    userName +
    " \n" +
    "user Telephone = " +
    userTelephone +
    " \n" +
    "complainant Category = " +
    complainantCategory +
    " \n" +
    "complaint Category = " +
    complaintCategory +
    " \n" +
    "brief description = " +
    briefDescription +
    " \n" +
    "To date = " +
    date
);

function CustomerComplaintFeedback(
  userName,
  userTelephone,
  complainantCategory,
  complaintCategory,
  briefDescription,
  date
) {
  this.userName = userName;
  this.userTelephone = userTelephone;
  this.complainantCategory = complainantType;
  this.complaintsCategory = complaintCategory;
  this.briefDescription = briefDescription;
  this.date = date;
  pushComplaint(this);
  renderChart(this);
  saveMode(this);
  this.id = generateId();
}

// this.renderSummary();

function saveMode(a) {
  let jsonA = {
    username: a.userName,
  };
  let mode = JSON.stringyfy();
}

// log number
function generateId() {
  let complaintsId = this.userName + complaintsLog.length() + 1;
}

//function to handle each submission
//function handleFormSubmission

// passing information to local storage
function setLocalStorage() {
  localStorage.setItem("complaints", JSON.stringify(complaintsLog));
}
