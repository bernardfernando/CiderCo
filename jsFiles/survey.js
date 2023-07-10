"use strict";
console.log("it is my survey");

//global variables
const labelContainer = document.querySelector("section");
const label1 = document.querySelector("section img:nth-child(1)");
const label2 = document.querySelector("section img:nth-child(2)");
const label3 = document.querySelector("section img:nth-child(3)");
const label4 = document.querySelector("section img:nth-child(4)");

let clicks = 0;
let allLabels = [];
let maxTurns = 25;

/*function getRandomNumber() {
  return Math.floor(Math.random() * allLabels.length);
  console.log();
}
Math.random();*/

function LabelSeclector(labelName, src) {
  this.labelName = labelName;
  this.src = src;
  this.clicks = clicks = 0;
  this.views = 0;
  allLabels.push(this);
}

//generate numbers to refrence the product we want to render
function renderLabels() {
  /* let label1 = getRandomNumber();
    let label2 = getRandomNumber();
    let label3 = getRandomNumber();
    let label4 = getRandomNumber();*/

  label1.src = allLabels[1].src;
  label2.src = allLabels[2].src;
  label3.src = allLabels[3].src;
  label4.src = allLabels[4].src;
  allLabels.views++;
}

//counting clicks

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < allLabels.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Views ${allLabels.views} amd was chosen ${allLabels[i].clicks} times`;
    ul.AppendChild(li);
  }
}

function handleLabelChoices(event) {
  if (event.target === labelContainer || !event.target.alt) {
    alert("please click on a label image");
  } else {
    clicks++;
    let clickedLabels = event.ratget.alt;

    for (let i = 0; i < allLabels.length; i++) {
      if (clickedLabels === allLabels[i].labelName) {
        allLabels[i].clicks++;
        break;
      }
    }
    if (clicks === maxTurns) {
      labelContainer.removeEventListener("click", handleLabelChoices);
      labelContainer, (className = "no Voting");
      setLocalStorage();
    } else {
      renderLabels();
    }
  }
}

const newLabelRange = ["label-1", "label-2", "label-3", "label-4"];

function renderChart() {
  const labelName = [];
  const labelViews = [];
  const labelClicks = [];

  for (let i = 0; i < allLabels.length; i++) {
    labelName.push(allLabels[i].labelName);
    labelViews.push(allLabels[i].views);
    labelClicks.push(allLabels[i].clicks);
  }

  const data = {
    labels: "choices",
    datasets: [
      {
        label: "clicks",
        data: labelClicks,
        backgroundColor: ["#f7f7f7"],
        borderWidth: 1,
      },

      {
        label: "labelViews",
        ImageData: labelViews,
        backgroundColor: ["#D36B00"],
        borderColor: ["#42032C"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };
  const labelSurveyChart = document.getElementById("labelChart");
  const labelChart = new CharacterData(labelSurveyChart, config);
}

function setLocalStorage() {
  localStorage.setItem("labels", JSON.stringify(allLabels));
}

function checkLocalStorage() {
  const localLabels = JSON.parse(localStorage.getItem("label"));
  if (localLabels) {
    allLabels = localLabels;
  } else {
    for (let i = 0; i < newLabelRange.length; i++) {
      new LabelSeclector(
        newLabelRange[i],
        `images/` + newLabelRange[i] + `.svg`
      );
    }
  }
}
checkLocalStorage();
renderLabels();
