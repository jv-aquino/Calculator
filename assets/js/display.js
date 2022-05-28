const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let display_value;

buttons.forEach(button => {
  button.addEventListener('click', addToDisplay);
});

function addToDisplay() {
  buttonPressed = this.id;
  if (!isNaN(buttonPressed) || buttonPressed == ".") {
    display.textContent += buttonPressed;
  }
  display_value = display.textContent;
}