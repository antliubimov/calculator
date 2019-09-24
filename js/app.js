let calc = {
  operation: null,
  result: null,
  num1: null,
  num2: null,
  arr: [],
};

const screenInput = document.querySelector(".screen-input");
const screenOutput = document.querySelector(".screen-output");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.addEventListener("click", btnClick));

function btnClick(e) {
  if (e.target.hasAttribute("data-number")) {
    writeNumber.call(this, e.target.getAttribute("data-number"));
  } else if (e.target.hasAttribute("data-key")) {
    operateMath.call(this, e.target.getAttribute("data-key"));
  }
}

function writeNumber(num) {
  if (screenOutput.innerText.length < 13) {
    if (calc.result !== null) {
      calc.num1 = calc.result;
      clearOutput();
    }
    screenOutput.innerText === "0"
      ? (screenOutput.innerText = num)
      : (screenOutput.innerText += num);
    screenInput.innerText += num;
  }
}

function operateMath(key) {
  switch (key) {
    case "C":
      screenOutput.innerText = "0";
      screenInput.innerText = "";
      calc.operation = null;
      calc.num1 = null;
      calc.num2 = null;
      calc.result = null;
      calc.arr = [];
      break;
    case "+/-":
      screenOutput.innerText = screenOutput.innerText * -1;
      break;
    case "del":
      break;
    case ".":
      if (!screenOutput.innerText.includes(".")) {
        screenOutput.innerText += ".";
      }
      break;
    case "%":

      break;
    case "/":
      checkOperation('/', divide);
      checkNums();
      calc.arr.push('/');
      calc.operation = divide;
      screenInputText();
      break;
    case "*":
      checkOperation('*', multiply);
      checkNums();
      calc.arr.push('*');
      calc.operation = multiply;
      screenInputText();
      break;
    case "-":
      checkOperation('-', subtract);
      checkNums();
      calc.arr.push('-');
      calc.operation = subtract;
      screenInputText();
      break;
    case "+":
      checkOperation('+', add);
      checkNums();
      calc.arr.push('+');
      calc.operation = add;
      screenInputText();
      break;
    case "=":
      calc.operation = '=';
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
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}

function operate(operation, num1, num2) {
  return operation(num1, num2);
}

function clearOutput() {
  screenOutput.innerText = '0';
}

function checkOperation(oper, operation) {
  if (calc.arr.length > 1 && (/[*\/+-]/g).test(calc.arr[calc.arr.length - 1])) {
      calc.arr.pop();
    calc.arr.push(oper);
    calc.operation = operation;
  }

}

function checkNums() {
  if (calc.num1 === null) {
    calc.num1 = Number(screenOutput.innerText);
    calc.arr.push(calc.num1);
    clearOutput();
  }
  if (calc.num1 !== null && calc.operation !== null) {
    calc.num2 = Number(screenOutput.innerText);
    calc.arr.push(calc.num2);
    calc.result = operate(calc.operation, calc.num1, calc.num2);
    calc.num1 = null;
    calc.num2 = null;
    calc.operation = null;
    screenOutput.innerText = String(calc.result);
  }
}

function screenInputText() {
  screenInput.innerText = calc.arr.join('');
}