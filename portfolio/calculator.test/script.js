const model = [
    { type: 'text', value: '0' },

    {
        type: 'buttonBox', value: btn = [
            { type: 'button', class: 'btn as bg-grey', value: 'as' },
            { type: 'button', class: 'btn plus-minus bg-grey', value: '+/-' },
            { type: 'button', class: 'btn percent bg-grey', value: '%' },
            { type: 'button', class: 'btn division bg-orange', value: '/' },
            { type: 'button', class: 'btn seven', value: '7' },
            { type: 'button', class: 'btn eight', value: '8' },
            { type: 'button', class: 'btn nine', value: '9' },
            { type: 'button', class: 'btn myltiply bg-orange', value: 'X' },
            { type: 'button', class: 'btn four', value: '4' },
            { type: 'button', class: 'btn five', value: '5' },
            { type: 'button', class: 'btn six', value: '6' },
            { type: 'button', class: 'btn minus bg-orange', value: '-' },
            { type: 'button', class: 'btn one', value: '1' },
            { type: 'button', class: 'btn two', value: '2' },
            { type: 'button', class: 'btn three', value: '3' },
            { type: 'button', class: 'btn plus bg-orange', value: '+' },
            { type: 'button', class: 'btn zero', value: '0' },
            { type: 'button', class: 'btn dot', value: '.' },
            { type: 'button', class: 'btn equal bg-orange', value: '=' }
        ]
    }
]

const calculator = document.querySelector('#calculator-box')

model.forEach(block => {
    let html = ''

    if (block.type === 'text') {
        html = `
           <div class="conclusion"> 
               <input id="input" type="text" value="${block.value}">
           </div>
        `
    } else if (block.type === 'buttonBox') {
        html = `
           <div id="buttonBox" class="button-box"></div>
        `
    }

    calculator.insertAdjacentHTML('beforeend', html);
});

const buttonBox = document.querySelector('#buttonBox')

btn.forEach(block => {
    let html = ''

    if (block.type === 'button') {
        html = `
           <div id="btn" class="${block.class}">${block.value}</div>
        `
    };

    buttonBox.insertAdjacentHTML('beforeend', html);
})

const as = document.querySelector('.as');
const out = document.querySelector('#input');

let a = '';
let b = '';
let sign = '';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%'];


as.onclick = function clearAll() {
    out.value = '0';
    a = '';
    b = '';
    sign = '';
    finish = false;
};

buttonBox.onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('as')) return;
    out.value = '0';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b == '' && sign === '') {
            a += key;
            out.value = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.value = b;
        }
        else {
            b += key;
            out.value = b;
        }
        return;
    }
    if (action.includes(key)) {
        sign = key;
        out.value = a;
        return;
    }

    if (digit.includes(key)) {
        if (b == '' && sign === '') {
            a += key;
            out.value = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.value = b;
        }
        else {
            b += key;
            out.value = b;
        }
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
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
        finish = true;
        out.value = a;
    }




    // (function () {
    //         out.addEventListener('keydown', function (e) {
    //             if (e.keyCode === 13) {
    //                 e.keyCode = '=';
    //             }
    //         });
    //     })();



};


out.onclick = function () { out.value = '' };
out.addEventListener("change", inputChange);

function inputChange() {
    if (a == '' && b == '') {
        a = out.value
    } else if (a !== '' && sign !== '' && b == '') {
        b = out.value
    } else if (a !== '' && b !== '' && sign !== '') {

    }

    console.log(a, b)
};

(function () {
    out.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            // if (b === '') {b = a};
            switch (sign) {
                case "+":
                    a = (+a) + (+b);
                    break
                case "-":
                    a = a - b;
                    break
                case "X":
                    a = a * b;
                    break
                case "/":
                    a = a / b;
                    break
            }
            // finish = true;
            out.value = a;
        }

        console.log(a, b, sign)
    });
})();


