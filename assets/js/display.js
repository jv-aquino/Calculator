const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector("#clear");
const textFirstNumber = document.querySelector('#firstNumber');

let displayValue = '';
let periodPressed = false;
let operationMade = false;
let waitNext = false;
let operator = null;
let firstNumber = null;
let secondNumber = null;

buttons.forEach(button => {
  button.addEventListener('click', addToDisplay);
});

calculateButton.addEventListener('click', calculate);

clearButton.addEventListener('click', clearDisplay);

function addToDisplay() {
  buttonPressed = this.id;
  if (!isNaN(buttonPressed) || (buttonPressed == ".") && (periodPressed === false)) {
    if (operationMade == true) {
      clearDisplay();
      operationMade = false;
    }

    displayValue += buttonPressed;

    if (buttonPressed == '.') {
      periodPressed = true;
    }
  }
  switch (buttonPressed) {
    case '+':
    case '-':
    case 'x':
    case '/':
      if (firstNumber === null) {
        firstNumber = displayValue;
        operator = buttonPressed;
        periodPressed = false;

        displayValue = '';
      }
      else {
          secondNumber = displayValue;
          
          displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
      
          secondNumber = null;
          firstNumber = null;
      }
      break;

    default:
      break;
  }
  display.textContent = displayValue;
}

function calculate() {
  if (firstNumber != null) {
    secondNumber = displayValue;
    
    displayValue = operate(operator, Number(firstNumber), Number(secondNumber));

    secondNumber = null;
    firstNumber = null;
  }
  
  display.textContent = displayValue;
  operationMade = true;
}

function clearDisplay() {
  periodPressed = false;
  operationMade = false;
  
  displayValue = '';
  display.textContent = displayValue;
}