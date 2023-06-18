class Calculator {
  constructor() {
    this.buttonsList = [
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
    this.number1 = null;
    this.number2 = null;
    this.operation = null;

    this.calculatorDiv = this.createMainDiv();
    document.body.appendChild(this.calculatorDiv);

    this.input = this.createInput();
    this.calculatorDiv.appendChild(this.input);
    document.onkeydown = (event) => onButtonPress(event.key);

    this.buttonsDiv = this.createButtonsDiv();
    this.calculatorDiv.appendChild(this.buttonsDiv);

    this.createButtons(this.buttonsList, this.buttonsDiv);


  }

  createMainDiv() {
    const div = document.createElement("div");
    div.classList.add('calculator-box');
    return div;
  }

  createInput() {
    const input = document.createElement("input");

    input.className = "conclusion";
    input.type = "text";
    input.value = 0;
    input.readOnly = true;

    return input;
  }

  createButtonsDiv() {
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "button-box";

    return buttonsDiv;
  }

  createButton(buttonData) {
    const button = document.createElement("button");
    button.className = buttonData.class;
    button.textContent = buttonData.value;
    button.id = buttonData.id;

    return button;
  }

  createButtons(buttonsList, buttonsDiv) {
    buttonsList.forEach((buttonData) => {
      const button = this.createButton(buttonData);

      button.onclick = () => this.onButtonPress(buttonData.value);

      buttonsDiv.appendChild(button);
    });
  }

  onNumberPressed(number) {
    if (this.number1 === null) {
      this.number1 = number;
      this.input.value = this.number1;
    } else if (this.operation === null) {
      this.number1 += number;
      this.input.value = this.number1;
    } else if (this.number2 === null) {
      this.number2 = number;
      this.input.value = this.number2;
    } else if (this.operation !== null) {
      this.number2 += number;
      this.input.value = this.number2;
    }
  }

  isOperation(buttonType) {
    return (
      buttonType === "+" ||
      buttonType === "-" ||
      buttonType === "X" ||
      buttonType === "/"
    );
  }

  isNumber(buttonType) {
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

  getButtonType(buttonType) {
    if (this.isOperation(buttonType)) {
      return "operator";
    } else if (this.isNumber(buttonType)) {
      return "number";
    } else if (buttonType === "as") {
      return "clear";
    } else if (buttonType === "=" || buttonType === "Enter") {
      return "result";
    } else if (buttonType === "=" && this.number2 === null || buttonType === "Enter" && this.number2 === null) {
      return "result";
    } else {
      throw new Error("Unknown button type");
    }
  }

  updateResult() {
    this.input.value = this.getResult(this.number1, this.number2, this.operation);
    this.number1 = this.input.value * 1;
    this.number2 = this.input.value * 1;
  }

  onButtonPress(buttonType) {
    if (this.getButtonType(buttonType) === "operator" && this.number1 && this.number2) {
      this.updateResult();
    }

    switch (this.getButtonType(buttonType)) {
      case "number":
        this.onNumberPressed(buttonType);
        break;
      case "operator":
        this.setOperation(buttonType);
        break;
      case "clear":
        this.clearAll();
        break;
      case "result":
        this.updateResult();
        break;
    }

    console.log(this.number1, this.operation, this.number2);
  }

  setOperation(buttonType) {
    this.operation = buttonType;
  }

  clearAll() {
    this.input.value = "0";
    this.number1 = null;
    this.number2 = null;
    this.operation = null;
  }

  getResult(value1, value2, operation) {
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


}

let calculator = new Calculator(document.getElementsByClassName('calculator-box'))