const screenInput = document.querySelector('.screen-input');
const screenOutput = document.querySelector('.screen-output');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', btnClick));

let num1 = 0;
let num2 = 0;
let result = 0;

function btnClick(e) {
  if (e.target.hasAttribute('data-number')) {
    writeNumber.call(this, e.target.getAttribute('data-number'));
  } else if (e.target.hasAttribute('data-key')) {
    operateMath(this, e.target.getAttribute(('data-key')));
  }
}

function writeNumber(num) {
  (screenOutput.innerText === '0') ? screenOutput.innerText = num : screenOutput.innerText += num;
  screenInput.innerText += num;
}

function operateMath(key) {
  switch (key) {
    case 'C':
      break;
    case '+/-':
      break;
    case '%':
      break;
    case '/':
      break;
    case '*':
      break;
    case '-':
      break;
    case '+':
      break;
    case '=':
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, num1, num2) {
  operation(num1, num2);
}