# UST Faculty Evaluation Form Automation Script

## Introduction

This is an automated script designed to streamline the process of completing the UST (University of Santo Tomas) faculty evaluation form by automatically selecting high scoring values. The script is intended for users who want to expedite the evaluation process by automating the selection of certain options on the form.

## Usage

To use this script, follow these steps:

1. **Access the UST Faculty Evaluation Form:** Open your web browser and navigate to the UST faculty evaluation form where you need to provide your feedback.

2. **Open the Browser Console:** Depending on your browser, you can usually open the browser console by pressing `F12`, `Ctrl+Shift+I`, or `Cmd+Option+I`. Alternatively, you can right-click on the page, select "Inspect," and go to the "Console" tab.

3. **Paste the Script:** Copy the script provided below and paste it into the browser console.

```javascript
const inputs = document.getElementsByTagName("input");
const spans = document.getElementsByTagName("span");

for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  if (span.textContent === "Very Satisfactory") {
    span.click();
  }
}

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  if (input.value === "1") {
    input.click();
  }
}
