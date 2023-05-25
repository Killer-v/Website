function createMainDiv() {
    const div = document.createElement("div");
    div.className = "calculator-box";
    document.body.appendChild(div);

    return div;
};

function createInput() {
    const input = document.createElement("input");
    input.className = "conclusion";
    input.type = "text";
    input.value = 0;
    input.onclick = () => { input.value = '' }
    input.onchange = () => inputChange();
    input.onkeydown = (event) => {
        event.key === "Enter" && getResult();
    }

    calculatorDiv.appendChild(input);

    return input;
};

function createButtons() {
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "button-box";

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

    const buttons = {};

    buttonsList.forEach((scan) => {
        const button = document.createElement("button");
        button.className = scan.class;
        button.textContent = scan.value;
        button.id = scan.id;

        buttons[scan.id] = button;

        button.onclick = () => onPress(scan.value);

        buttonsDiv.appendChild(button);

    });

    calculatorDiv.appendChild(buttonsDiv);

    return buttons;
};

function clearAll() {
    input.value = 0;
    a = '';
    b = '';
    sign = '';
    finish = false;
};

function onPress(value) {
    switch (value) {
        case "=":
            getResult();
            break;
        case "as":
            clearAll();
            break;
        case "+":
        case "-":
        case "X":
        case "/":
            input.value = value
            sign = value;
            break
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if (b == '' && sign === '') {
                a += value;
                input.value = a;
            }
            else if (a !== '' && b !== '' && finish) {
                b = value;
                finish = false;
                input.value = b;
            }
            else {
                b += value;
                input.value = b;
            }
            break
    }
    
    console.log(a, sign,b );
};

function getResult() {
    switch (sign) {
        case "+/-":
            break;
        case "+":
            a = (+a) + (+b);
            input.value = a;
            break
        case "-":
            a = (+a) - (b);
            input.value = a;
            break
        case "X":
            a = (+a) * (b);
            input.value = a;
            break
        case "/":
            a = (+a) / (b);
            input.value = a;
            break
    }
};

function inputChange() {
    if (a == '' && b == '') {
        a += input.value
    } else if (b == '' && a !== '' && sign !== '') {
        b += input.value
    } else if (a !== '' && b !== '' && sign !== '') {
        clearAll();
        a += input.value
    }
};



let a = '';
let b = '';
let sign = '';
let finish = false;

const calculatorDiv = createMainDiv();
const input = createInput();
const buttons = createButtons();