const display = document.querySelector('#displayContent');
const buttons = document.querySelectorAll('button');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector('#backspace');
const textFirstNumber = document.querySelector('#firstNumber');

let displayValue = '';
let periodPressed = false;
let operationMade = false;
let operator = null;
let firstNumber = null;
let secondNumber = null;
let lastButton = null;

buttons.forEach(button => {
  button.addEventListener('click', addToDisplay);
});

calculateButton.addEventListener('click', calculate);

clearButton.addEventListener('click', clearAll);

backspaceButton.addEventListener('click', applyBackspace);

function addToDisplay() {
  if (lastButton === null) {
    buttonPressed = this.id;
  }
  else {
    buttonPressed = lastButton;
    lastButton = null;
  }

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
  lastButton = checkOperator();
  display.textContent = displayValue;
}

function calculate() {
  if (firstNumber != null) {
    secondNumber = displayValue;
    
    displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
    textFirstNumber.textContent = '';

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
        return null;
      }
      else {
          secondNumber = displayValue;
          
          displayValue = operate(operator, Number(firstNumber), Number(secondNumber));
          textFirstNumber.textContent = '';
      
          secondNumber = null;
          firstNumber = null;
          return buttonPressed;
      }
      break;

    default:
      return null;
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