const inputs = document.getElementsByTagName("input")
const spans = document.getElementsByTagName("span")

for (let i = 0; i < spans.length; i++) {
  const span = spans[i]
  if (span.textContent === "Very Satisfactory") {
    span.click()
  }
}

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i]
  if (input.value === "1") {
    input.click()
  }
}
