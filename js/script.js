const currVal = document.getElementById("current-value");
const prevVal = document.getElementById("prev-value");
const operators = document.getElementsByClassName("operator");
const numbers = document.getElementsByClassName("number");

let currentValue = "";
let prevValue = "";

function updateDisplay() {
    currVal.textContent = currentValue;
}

function clearDisplay() {
    currentValue = "";
    prevValue = "";
}

function backspace() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function evaluate() {
    currentValue = currentValue.toString().replace("x", "*");
    if (currentValue === "Error") {
      return "Error";
    }
  
    try {
      currentValue = eval(currentValue);
    } catch (error) {
      currentValue = "Error";
    }
  }

Array.from(operators).forEach((operators) => {
    operators.addEventListener("click", () => {
      switch (operators.id) {
        case "clear":
          clearDisplay();
          break;
        case "%":
          currentValue += "%";
          break;
        case "/":
          currentValue += "/";
          break;
        case "*":
          currentValue += "x";
          break;
        case "-":
          currentValue += "-";
          break;
        case "+":
          currentValue += "+";
          break;
        case "backspace":
          backspace();
          break;
        case "equals":
          evaluate();
          break;
      }
      updateDisplay();
    });
  });
  
  Array.from(numbers).forEach((numbers) => {
    numbers.addEventListener("click", () => {
      currentValue += numbers.id;
      updateDisplay();
    });
  });