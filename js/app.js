let calc = {
  operation: null,
  result: null,
  num1: null,
  num2: null,
  arr: [],
  lastEnter: null
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
      [calc.num1, calc.result] = [calc.result, null];
    }

    /[*\/+-]/g.test(calc.lastEnter) || screenOutput.innerText === "0"
      ? (screenOutput.innerText = num)
      : (screenOutput.innerText += num);

    if (calc.lastEnter === '=') {
     for (let key in calc) {
       calc[key] = null;
     }
     calc.arr = [];
     screenInput.innerText = '';
     screenOutput.innerText = num;
    }
    calc.lastEnter = num;
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
      let str = screenOutput.innerText.split('');
      str.splice(-1,1);
      screenOutput.innerText = str.join('');
      if (screenOutput.innerText === '') screenOutput.innerText = '0';
      break;
    case ".":
      if (!screenOutput.innerText.includes(".")) {
        screenOutput.innerText += ".";
      }
      break;
    case "%":
      if (calc.num1 !== null) {
        screenOutput.innerText = String(calc.num1 / 100 * Number(screenOutput.innerText));
      } else {
        screenOutput.innerText = '0';
      }
      break;
    case "/":
      clickOperation("/", divide);
      break;
    case "*":
      clickOperation("*", multiply);
      break;
    case "-":
      clickOperation("-", subtract);
      break;
    case "+":
      clickOperation("+", add);
      break;
    case "=":
      if (calc.num1 === null) {
        calc.result = Number(screenOutput.innerText);
      } else  {
        checkNums();
      }
      screenInput.innerText = String(calc.result);
      calc.arr = [calc.result];
      calc.num1 = calc.result;
      calc.lastEnter = '=';
      break;
  }
}

function clickOperation(key, operation) {
  if (/[*\/+-]/g.test(calc.lastEnter)){
    checkOperation(key, operation);
    calc.lastEnter = key;
  } else  {
    checkNums();
    calc.arr.push(key);
    calc.operation = operation;
    screenInputText();
    calc.lastEnter = key;
  }
}

function checkOperation(oper, operation) {
  if (calc.arr.length > 1) {
    calc.arr.pop();
    let str = screenInput.innerText.split('');
    str.splice(-1,1);
    screenInput.innerText = str.join('');
    screenInput.innerText += oper;
    calc.arr.push(oper);
    calc.operation = operation;
  }
}

function checkNums() {
  if (calc.num1 === null) {
    calc.num1 = Number(screenOutput.innerText);
    calc.arr.push(calc.num1);
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
  screenInput.innerText = calc.arr.join("");
}

function operate(operation, num1, num2) {
  return operation(num1, num2);
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
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}