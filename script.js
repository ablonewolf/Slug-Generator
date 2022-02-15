"use strict";
let dashbutton_state;
let underscorebutton_state;
var input;
var wordlist = [];
let withoutdigits;
var output;
const inputText = document.querySelector("#titletextbox");
const GenerateButton = document.querySelector("#generate-button");
const DashButton = document.querySelector(".dashbutton");
const UnderscoreButton = document.querySelector(".underscorebutton");

const ClearButton = document.querySelector("#clear");
const ResetButton = document.querySelector("#reset");

const OutputTextArea = document.querySelector("#output-slug");
const DigitButton = document.querySelector("#withoutdigit");
const copybutton = document.querySelector("#copy-button");

// function to prepare for the initial stage
const init = function () {
  input = "";
  inputText.value = "";
  wordlist = [];
  output = "";
  OutputTextArea.style.display = "none";
  OutputTextArea.textContent = "";
  dashbutton_state = false;
  underscorebutton_state = false;
  withoutdigits = false;
  DashButton.classList.remove("active");
  UnderscoreButton.classList.remove("active");
};

// function to remove numeric values from the array
const removedigits = function () {
  for (const w of wordlist) {
    if (!isNaN(w)) {
      const index = wordlist.indexOf(w);
      wordlist.splice(index, 1);
    }
  }
  console.log(wordlist);
};
// function to format the string with dash
const dashformatting = function () {
  if (withoutdigits) {
    removedigits();
  }
  return wordlist.join("-");
};

// function to format the string with underscore
const underscoreformatting = function () {
  if (withoutdigits) {
    removedigits();
  }
  return wordlist.join("_");
};
// function to show the output string
const showOutput = function () {
  if (dashbutton_state) {
    output = dashformatting();
  }
  if (underscorebutton_state) {
    output = underscoreformatting();
  }
  OutputTextArea.textContent = output;
  OutputTextArea.style.display = "inline-block";
};
init();

// function to highlight change in button
const changeButton = function (Button, buttonstate) {
  if (buttonstate) {
    Button.classList.remove("btn-primary");
    Button.classList.add("btn-secondary");
  } else {
    Button.classList.remove("btn-secondary");
    Button.classList.add("btn-primary");
  }
};
// dash button handler
DashButton.addEventListener("click", function () {
  dashbutton_state = true;
  underscorebutton_state = false;
  //   console.log(DashButton.classList);
  DashButton.classList.add("active");
  changeButton(DashButton, dashbutton_state);
  if (UnderscoreButton.classList.contains("active")) {
    UnderscoreButton.classList.remove("active");
  }
  changeButton(UnderscoreButton, underscorebutton_state);
});

// underscore button handler
UnderscoreButton.addEventListener("click", function () {
  dashbutton_state = false;
  underscorebutton_state = true;
  UnderscoreButton.classList.add("active");
  changeButton(UnderscoreButton, underscorebutton_state);
  if (DashButton.classList.contains("active")) {
    DashButton.classList.remove("active");
  }
  changeButton(DashButton, dashbutton_state);
});

// button handler to check whether the user wants digit or not in the output string, the radio button
DigitButton.addEventListener("click", function () {
  if (DigitButton.checked) {
    withoutdigits = true;
  } else withoutdigits = false;
});

// button handler to generate slug
GenerateButton.addEventListener("click", function () {
  input = inputText.value;
  if (input === "") {
    window.alert("You have not entered anything yet in the input field.");
  } else {
    wordlist = input.split(" ");
    if (dashbutton_state || underscorebutton_state) {
      showOutput();
    } else {
      window.alert(
        "You haven't selected an option. Please select 'Seperate with Dash' or 'Separate with Underscore.'"
      );
    }
  }
});

// button handler to clear text
ClearButton.addEventListener("click", function () {
  inputText.value = "";
  OutputTextArea.textContent = "";
  changeButton(DashButton, false);
  changeButton(UnderscoreButton, false);
});

// button handler to reset everything
ResetButton.addEventListener("click", function () {
  init();
  inputText.value = "";
  OutputTextArea.textContent = "";
  DigitButton.checked = false;
  changeButton(DashButton, dashbutton_state);
  changeButton(UnderscoreButton, underscorebutton_state);
});

// button handler to copy the output slug

copybutton.addEventListener("click", function () {
  let copytext = OutputTextArea.value;
  //   console.log(copytext);
  if (copytext === "") {
    window.alert("There is nothing in the output slug.");
  } else {
    navigator.clipboard.writeText(copytext);
    window.alert(`The text has been copied. ${copytext}`);
  }
});
