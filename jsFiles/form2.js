"use strict";
console.log("yest it works");

// selecting the form
const form = document.getElementById("complaintsForm");

// add an event listener
form.addEventListener("submit", onFormSubmit);

// create fallback function important to prevent the default action of the submit event to avoid triggering a page reload to do this event.preventDefault() is used
function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = data.get("complainant");
  const telePhoneNumber = data.get("telNumber");
  const complainantCategory = data.get("complainantTyp");
  const complaintCategory = data.get("issueRelatedTo");
  const briefDescription = data.get("briefDescriptionOfIssue");
  const dateComplaintLodged = data.get("complaintDate");
  console.log(
    `Name: ${name}, Telephone: ${telePhoneNumber}, ComplainanantCategory, ${complainantCategory}, ComplaintCategory : ${complaintCategory}, Brief Description : ${briefDescription},Date: ${dateComplaintLodged}`
  );
}
