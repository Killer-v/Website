const model = [
    {type: 'text', value: '0' },

    {
        type: 'buttonBox', value: btn = [
            { type: 'button', class: 'bg-grey', value: 'as' },
            { type: 'button', class: 'bg-grey', value: '+/-' },
            { type: 'button', class: 'bg-grey', value: '%' },
            { type: 'button', class: 'bg-orange', value: '/' },
            { type: 'button', class: '', value: '7' },
            { type: 'button', class: '', value: '8' },
            { type: 'button', class: '', value: '9' },
            { type: 'button', class: 'bg-orange', value: 'X' },
            { type: 'button', class: '', value: '4' },
            { type: 'button', class: '', value: '5' },
            { type: 'button', class: 'bg-orange', value: '-' },
            { type: 'button', class: '', value: '1' },
            { type: 'button', class: '', value: '2' },
            { type: 'button', class: '', value: '3' },
            { type: 'button', class: 'bg-orange', value: '+' },
            { type: 'button', class: '', value: '0' },
            { type: 'button', class: '', value: '.' },
            { type: 'button', class: 'bg-orange', value: '=' }
        ]
    }
]

const calculator = document.querySelector('#calculator-box')

model.forEach(block => {
    let html = ''

    if (block.type === 'text') {
        html = `
           <div class="conclusion"> 
               <input type="text" value="${block.value}">
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
           <div id="btn" class="btn">${block.value}</div>
        `    
    };

    // let btn = document.querySelector('#btn')
    // if (block.class === 'bg-grey'){
    //     btn.className = 'bg-grey';
    // }

    buttonBox.insertAdjacentHTML('beforeend', html);
})