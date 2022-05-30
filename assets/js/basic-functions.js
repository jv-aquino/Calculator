function add (a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "bro u serious?";
  }
  return a / b;
}

function operate(operator, a, b) {
  if (operator == "+") {
    return add(a, b);
  }

  else if (operator == "-") {
    return subtract(a, b);
  }

  else if (operator == "*" || operator == "x") {
    return multiply(a, b);
  }

  else if (operator == "/" || operator == "÷") {
    return divide(a, b);
  }
}