const buttonsList = [
  { id: "as", class: "btn as bg-grey", value: "as" },
  { id: "plusMinus", class: "btn plusMinus bg-grey", value: "+/-" },
  { id: "percent", class: "btn percent bg-grey", value: "%" },
  { id: "division", class: "btn division bg-orange", value: "/" },
  { id: "seven", class: "btn seven", value: "7" },
  { id: "eight", class: "btn eight", value: "8" },
  { id: "nine", class: "btn nine", value: "9" },
  { id: "myltiply", class: "btn myltiply bg-orange", value: "X" },
  { id: "four", class: "btn four", value: "4" },
  { id: "five", class: "btn five", value: "5" },
  { id: "six", class: "btn six", value: "6" },
  { id: "minus", class: "btn minus bg-orange", value: "-" },
  { id: "one", class: "btn one", value: "1" },
  { id: "two", class: "btn two", value: "2" },
  { id: "three", class: "btn three", value: "3" },
  { id: "plus", class: "btn plus bg-orange", value: "+" },
  { id: "zero", class: "btn zero", value: "0" },
  { id: "dot", class: "btn dot", value: "." },
  { id: "equal", class: "btn equal bg-orange", value: "=" },
];

let number1 = null;
let number2 = null;
let operation = null;

function createMainDiv() {
  const div = document.createElement("div");
  div.className = "calculator-box";

  return div;
}

function createInput() {
  const input = document.createElement("input");

  input.className = "conclusion";
  input.type = "text";
  input.value = 0;
  input.readOnly = true;

  return input;
}

function createButtonsDiv() {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "button-box";

  return buttonsDiv;
}

function createButton(buttonData) {
  const button = document.createElement("button");
  button.className = buttonData.class;
  button.textContent = buttonData.value;
  button.id = buttonData.id;

  return button;
}

function createButtons(buttonsList, buttonsDiv) {
  buttonsList.forEach((buttonData) => {
    const button = createButton(buttonData);

    button.onclick = () => onButtonPress(buttonData.value);

    buttonsDiv.appendChild(button);
  });
}

function onNumberPressed(number) {
  if (number1 === null) {
    number1 = number;
    input.value = number1;
  } else if (operation === null) {
    number1 += number;
    input.value = number1;
  } else if (number2 === null) {
    number2 = number;
    input.value = number2;
  }
}

function isOperation(buttonType) {
  return (
    buttonType === "+" ||
    buttonType === "-" ||
    buttonType === "X" ||
    buttonType === "/"
  );
}

function isNumber(buttonType) {
  return (
    buttonType === "0" ||
    buttonType === "1" ||
    buttonType === "2" ||
    buttonType === "3" ||
    buttonType === "4" ||
    buttonType === "5" ||
    buttonType === "6" ||
    buttonType === "7" ||
    buttonType === "8" ||
    buttonType === "9"
  );
}

function getButtonType(buttonType) {
  if (isOperation(buttonType)) {
    return "operator";
  } else if (isNumber(buttonType)) {
    return "number";
  } else if (buttonType === "as") {
    return "clear";
  } else if (buttonType === "=" || buttonType === "Enter") {
    return "result";
  } else {
    throw new Error("Unknown button type");
  }
}

function updateResult() {
  input.value = getResult(number1, number2, operation);
  number1 = input.value * 1;
  number2 = null;
}

function onButtonPress(buttonType) {
  if (getButtonType(buttonType) === "operator" && number1 && number2) {
    updateResult();
  }

  switch (getButtonType(buttonType)) {
    case "number":
      onNumberPressed(buttonType);
      break;
    case "operator":
      setOperation(buttonType);
      break;
    case "clear":
      clearAll();
      break;
    case "result":
      updateResult();
      break;
  }

  //   console.log(number1, operation, number2);
}

function setOperation(buttonType) {
  operation = buttonType;
}

function clearAll() {
  input.value = "";
  number1 = null;
  number2 = null;
  operation = null;
}

function getResult(value1, value2, operation) {
  let res;
  value1 *= 1;
  value2 *= 1;

  switch (operation) {
    case "+":
      res = value1 + value2;
      break;
    case "-":
      res = value1 - value2;
      break;
    case "X":
      res = value1 * value2;
      break;
    case "/":
      res = value1 / value2;
      break;
  }

  return res;
}

const calculatorDiv = createMainDiv();
document.body.appendChild(calculatorDiv);

const input = createInput();
calculatorDiv.appendChild(input);
document.onkeydown = (event) => onButtonPress(event.key);

const buttonsDiv = createButtonsDiv();
calculatorDiv.appendChild(buttonsDiv);

createButtons(buttonsList, buttonsDiv);
