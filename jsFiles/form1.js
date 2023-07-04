//js for the complaints form
"use strict";
console.log("my form my form");

const form = document.getElementById("complaintsForm");
// const formData = new FormData(form);
const submitButton = document.getElementById("submitButton");
// form.addEventListener("submit,onFormSubmit);

submitButton.addEventListener("click", collectFormData);
// console.log(formData);

const complaintLog = [];

// function collectFormData() {
//   let formData = document.forms["complaintsForm"];
//   let userName = formData["complainantName"].value;
//   let userTelephone = formData["telephoneNumber"].value;
//   let complainantCategory = formData["complainantType"].value;
//   let complaintCategory = formData["issueRelatedTo"].value;
//   let briefDescription = formData["briefDescriptionOfIssue"].value;
//   let date = formData["complaintDate"].value;

function collectFormData() {
  let formData = document.forms.complaintsForm;
  let userName = formData.complainantName.value;
  let userTelephone = formData.telephoneNumber.value;
  let complainantCategory = formData.complainantType.value;
  let complaintCategory = formData.issueRelatedTo.value;
  let briefDescription = formData.briefDescriptionOfIssue.value;
  let date = formData.complaintDate.value;

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
}

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
  this.complainantCategory = customerCategory;
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
