const screenInput = document.querySelector('.screen-input');
const screenOutput = document.querySelector('.screen-output');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', btnClick));

let calc = {
  operation: null,
}

let num1 = null;
let num2 = null;
let result = null;

function btnClick(e) {
  if (e.target.hasAttribute('data-number')) {
    writeNumber.call(this, e.target.getAttribute('data-number'));
  } else if (e.target.hasAttribute('data-key')) {
    operateMath.call(this, e.target.getAttribute(('data-key')));
  }
}

function writeNumber(num) {
  if (screenOutput.innerText.length < 13) {
    (screenOutput.innerText === '0') ? screenOutput.innerText = num : screenOutput.innerText += num;
    screenInput.innerText += num;
  }
}

function operateMath(key) {
  console.log(key);
  switch (key) {
    case 'C':
      screenOutput.innerText = '0';
      screenInput.innerText = '';
      num1 = null;
      num2 = null;
      result = null;
      break;
    case '+/-':
      screenOutput.innerText = screenOutput.innerText * (-1);
      break;
    case 'del':
      break;
    case '.':
      if (!screenOutput.innerText.includes('.')) {
        screenOutput.innerText += '.';
      }
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