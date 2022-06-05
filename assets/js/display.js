const display = document.querySelector('#displayContent');
const buttons = document.querySelectorAll('button');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector('#backspace');
const textFirstNumber = document.querySelector('#firstNumber');

let displayValue = '';
let periodPressed = false;
let operation = false;

let operator = null;
let firstNumber = null;
let secondNumber = null;

buttons.forEach(button => {
  button.addEventListener('click', addToDisplay);
});

calculateButton.addEventListener('click', calculate);

clearButton.addEventListener('click', clearAll);

backspaceButton.addEventListener('click', applyBackspace);

function addToDisplay() {
  buttonPressed = this.id;

  if (!isNaN(buttonPressed) || (buttonPressed == ".") && (periodPressed === false)) {

    displayValue += buttonPressed;

    if (buttonPressed == '.') {
      periodPressed = true;
    }
  }
  checkOperator();
  display.textContent = displayValue;
}

function calculate() {
  if (firstNumber != null) {
    secondNumber = displayValue;
          
    displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
    if (operation) {
      operator = buttonPressed;

      textFirstNumber.textContent = displayValue + " " + operator;
      firstNumber = Number(displayValue);
      displayValue = '';

      operation = false;
    }
    else {
      textFirstNumber.textContent = '';
      firstNumber = null;
    }
     
    secondNumber = null;
  }
  display.textContent = displayValue;
}

function clearDisplay() {
  periodPressed = false;
  
  displayValue = '';
  display.textContent = displayValue;
}

function applyBackspace() {
  displayValue = displayValue.slice(0, -1);
  display.textContent = displayValue;
}

function checkOperator() {
  switch (buttonPressed) {
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (firstNumber === null) {
        firstNumber = displayValue;
        operator = buttonPressed;
        periodPressed = false;

        textFirstNumber.textContent = firstNumber + " " + operator;

        displayValue = '';
        return;
      }
      operation = true;
      calculate();
      break;

    default:
      break;
  }
}

function clearAll() {
  displayValue = '';
  periodPressed = false;
  operationMade = false;
  waitNext = false;
  operator = null;
  firstNumber = null;
  secondNumber = null;
  lastButton = null;

  textFirstNumber.textContent = display.textContent = displayValue;
}