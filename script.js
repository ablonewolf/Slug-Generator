"use strict";
let dashButtonState;
let underscoreButtonState;
let input;
let wordlist = [];
let withoutDigits;
let output;
const inputText = document.querySelector("#titletextbox");
const GenerateButton = document.querySelector("#generate-button");
const DashButton = document.querySelector(".dashbutton");
const UnderscoreButton = document.querySelector(".underscorebutton");

const ClearButton = document.querySelector("#clear");
const ResetButton = document.querySelector("#reset");

const OutputZone = document.querySelector("#outputzone");
const OutputTextArea = document.querySelector("#output-slug");
const DigitButton = document.querySelector("#withoutdigit");
const copyButton = document.querySelector("#copy-button");

// function to prepare for the initial stage
const init = function () {
    input = "";
    inputText.value = "";
    wordlist = [];
    output = "";
    OutputZone.style.display = "none";
    //   OutputTextArea.style.display = "none";
    //   copybutton.style.display = "none";
    OutputTextArea.textContent = "";
    dashButtonState = false;
    underscoreButtonState = false;
    withoutDigits = false;
    DashButton.classList.remove("active");
    UnderscoreButton.classList.remove("active");
};

// function to remove numeric values from the array
const removeDigits = function () {
    for (const w of wordlist) {
        if (!isNaN(w)) {
            const index = wordlist.indexOf(w);
            wordlist.splice(index, 1);
        }
    }
    console.log(wordlist);
};
// function to format the string with dash
const dashFormatting = function () {
    if (withoutDigits) {
        removeDigits();
    }
    return wordlist.join("-");
};

// function to format the string with underscore
const underscoreFormatting = function () {
    if (withoutDigits) {
        removeDigits();
    }
    return wordlist.join("_");
};
// function to show the output string
const showOutput = function () {
    if (dashButtonState) {
        output = dashFormatting();
    }
    if (underscoreButtonState) {
        output = underscoreFormatting();
    }
    OutputZone.style.display = "block";
    OutputTextArea.textContent = output;
    OutputTextArea.style.display = "inline-block";
};
init();

// function to highlight change in button
const changeButton = function (Button, buttonState) {
    if (buttonState) {
        Button.classList.remove("btn-primary");
        Button.classList.add("btn-secondary");
    } else {
        Button.classList.remove("btn-secondary");
        Button.classList.add("btn-primary");
    }
};
// dash button handler
DashButton.addEventListener("click", function () {
    dashButtonState = true;
    underscoreButtonState = false;
    //   console.log(DashButton.classList);
    DashButton.classList.add("active");
    changeButton(DashButton, dashButtonState);
    if (UnderscoreButton.classList.contains("active")) {
        UnderscoreButton.classList.remove("active");
    }
    changeButton(UnderscoreButton, underscoreButtonState);
});

// underscore button handler
UnderscoreButton.addEventListener("click", function () {
    dashButtonState = false;
    underscoreButtonState = true;
    UnderscoreButton.classList.add("active");
    changeButton(UnderscoreButton, underscoreButtonState);
    if (DashButton.classList.contains("active")) {
        DashButton.classList.remove("active");
    }
    changeButton(DashButton, dashButtonState);
});

// button handler to check whether the user wants digit or not in the output string, the radio button
DigitButton.addEventListener("click", function () {
    withoutDigits = !!DigitButton.checked;
});

// button handler to generate slug
GenerateButton.addEventListener("click", function () {
    input = inputText.value;
    if (input === "") {
        window.alert("You have not entered anything yet in the input field.");
    } else {
        wordlist = input.split(" ");
        if (dashButtonState || underscoreButtonState) {
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
    dashButtonState = false;
    underscoreButtonState = false;
    changeButton(DashButton, dashButtonState);
    changeButton(UnderscoreButton, underscoreButtonState);
});

// button handler to reset everything
ResetButton.addEventListener("click", function () {
    init();
    inputText.value = "";
    OutputTextArea.textContent = "";
    DigitButton.checked = false;
    changeButton(DashButton, dashButtonState);
    changeButton(UnderscoreButton, underscoreButtonState);
});

// button handler to copy the output slug

copyButton.addEventListener("click", function () {
    let copytext = OutputTextArea.value;
    //   console.log(copytext);
    if (copytext === "") {
        window.alert("There is nothing in the output slug.");
    } else {
        navigator.clipboard.writeText(copytext);
        window.alert(`The text has been copied. ${copytext}`);
    }
});
