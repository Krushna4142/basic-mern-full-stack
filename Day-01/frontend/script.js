// Selecting elements from the DOM
const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkBtn");
const resultText = document.getElementById("result");

// Adding click event to the button
checkButton.addEventListener("click", function () {
  const number = numberInput.value;

  // Validation: check if input is empty
  if (number === "") {
    resultText.textContent = "Please enter a number.";
    resultText.style.color = "red";
    return;
  }

  // Convert input value to number
  const parsedNumber = Number(number);

  // Logic to check even or odd
  if (parsedNumber % 2 === 0) {
    resultText.textContent = `${parsedNumber} is an Even number`;
    resultText.style.color = "green";
  } else {
    resultText.textContent = `${parsedNumber} is an Odd number`;
    resultText.style.color = "blue";
  }
});
