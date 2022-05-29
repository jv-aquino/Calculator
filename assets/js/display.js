const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const calculateButton = document.querySelector('.calculate');

let displayValue = '';
let periodPressed = false;
let operator = null;
let firstNumber = null;
let secondNumber = null;

buttons.forEach(button => {
  button.addEventListener('click', addToDisplay);
});

calculateButton.addEventListener('click', calculate);

function addToDisplay() {
  buttonPressed = this.id;
  if (!isNaN(buttonPressed) || (buttonPressed == ".") && (periodPressed === false)) {
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
}