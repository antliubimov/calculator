const screenInput = document.querySelector('.screen-input');
const screenOutput = document.querySelector('.screen-output');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', btnClick));

function btnClick(e) {
  let dataType = e.target.attributes['data-type'].value;
console.log(dataType);
  if (dataType === 'operation') {
    screenInput.innerText += e.target.innerText;
    screenOutput.innerText = '0';
  } else if (dataType === 'number') {
    if (screenOutput.innerText === '0') {
      screenOutput.innerText = e.target.innerText;
    } else {
      screenOutput.innerText += e.target.innerText;
    }

    screenInput.innerText += e.target.innerText;
  }

  if (e.target.innerText === 'C') {
    screenInput.innerText = '';
    screenOutput.innerText = '0';
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