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

let a = '';
let b = '';
let sign = '';
let finish = false;

const calculatorDiv = document.createElement("div");
calculatorDiv.className = "calculator-box";

document.body.appendChild(calculatorDiv);

const input = document.createElement("input");
input.className = "conclusion";
input.type = "text";
input.value = 0;
input.onclick = () => { input.value = '' }
input.onchange = () => inputChange();
input.onkeydown = (event) => {
    event.key === "Enter" && getResult();
}

const buttonsDiv = document.createElement("div");
buttonsDiv.className = "button-box";

calculatorDiv.appendChild(input);
calculatorDiv.appendChild(buttonsDiv);

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



function onPress(value) {
    switch (value) {
        case "as":
            clearAll();
            break;
        case "+/-":
            sign = value;
            break;
        case "+":
            sign = value;
            break;
        case "-":
            sign = value;
            break;
        case "X":
            sign = value;
            break;
        case "/":
            sign = value;
            break;
        case "%":
            sign = value;
            break;
    }
   
    if (value.includes('1','2','3','4','5','6','7','8','9','0')) {
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
        return;
    } console.log( a, b);
}

function clearAll() {
    input.value = 0;
    a = '';
    b = '';
    sign = '';
    finish = false;
};

function getResult() {
    switch (value) {
        case "+/-":
            break;
        case "+":
            a = (+a) + (+b);
            break
        case "-":
            a = (+a) - (+b);
            break
        case "X":
            a = (+a) * (+b);
            break
        case "/":
            a = (+a) / (+b);
            break
    }
};

// function getResult () {
//     if (digit.includes(key)) {
//         if (b == '' && sign === '') {
//             a += key;
//             out.value = a;
//         }
//         else if (a !== '' && b !== '' && finish) {
//             b = key;
//             finish = false;
//             out.value = b;
//         }
//         else {
//             b += key;
//             out.value = b;
//         }
//         return;
//     }
//     if (action.includes(key)) {
//         sign = key;
//         out.value = a;
//         return;
//     }

//     if (digit.includes(key)) {
//         if (b == '' && sign === '') {
//             a += key;
//             out.value = a;
//         }
//         else if (a !== '' && b !== '' && finish) {
//             b = key;
//             finish = false;
//             out.value = b;
//         }
//         else {
//             b += key;
//             out.value = b;
//         }
//         return;
//     }

//     if (key === '=') {
//         if (b === '') b = a;
//         switch (sign) {
//             case "+":
//                 a = (+a) + (+b);
//                 break
//             case "-":
//                 a = (+a) - (+b);
//                 break
//             case "X":
//                 a = (+a) * (+b);
//                 break
//             case "/":
//                 a = (+a) / (+b);
//                 break
//         }
//         finish = true;
//         out.value = a;
//     }
// }



// function inputChange() {
//     if (a == '' && b == '') {
//         a += input.value
//     } else if (b == '' && a !== '' && sign !== '') {
//         b += input.value
//     } else if (a !== '' && b !== '' && sign !== '') {
//         clearAll();
//         a += input.value
//     }
// };