const left_button2 = document.getElementById('button-left-container2');
const right_button2 = document.getElementById('button-right-container2');
const carousel2 = document.getElementById('carousel2');

 const elementWidth2 = 380;
// var elementWidth2 = document.getElementsByClassName('card').offsetWidth;

moveLastElementToFront();

right_button2.addEventListener('click', function (event) {
    event.preventDefault();

    carousel2.classList.add('animate');

    carousel2.style.left = -(elementWidth2 * 2) + "px";

    setTimeout(function () {
        carousel2.classList.remove('animate');

        moveFirstElementToEnd();
    }, 250);
});

left_button2.addEventListener('click', function (event) {
    event.preventDefault();

    carousel2.classList.add('animate');

    carousel2.style.left = "0px";

    setTimeout(function () {
        carousel2.classList.remove('animate');

        moveLastElementToFront();
    }, 250);
});

function moveLastElementToFront() {
    const lastElementID = carousel2.children.length - 1;
    const lastElement = carousel2.children[lastElementID];

    carousel2.children[lastElementID].remove();

    carousel2.prepend(lastElement);

    carousel2.style.left = -elementWidth2 + "px";
}

function moveFirstElementToEnd() {
    const firstElement = carousel2.children[0];

    carousel2.children[0].remove();

    carousel2.style.left = -elementWidth2 + "px";

    carousel2.append(firstElement);
}



const left_button3 = document.getElementById('button-left-container3');
const right_button3 = document.getElementById('button-right-container3');
const carousel3 = document.getElementById('carousel3');

// const elementWidth3 = 928;
var elementWidth3 = document.getElementsByClassName('cart3').offsetWidth;

moveLastElementToFront2();

right_button3.addEventListener('click', function (event) {
    event.preventDefault();

    carousel3.classList.add('animate');

    carousel3.style.left = -(elementWidth3 * 2) + "px";

    setTimeout(function () {
        carousel3.classList.remove('animate');

        moveFirstElementToEnd2();
    }, 250);
});

left_button3.addEventListener('click', function (event) {
    event.preventDefault();

    carousel3.classList.add('animate');

    carousel3.style.left = "0px";

    setTimeout(function () {
        carousel3.classList.remove('animate');

        moveLastElementToFront2();
    }, 250);
});

function moveLastElementToFront2() {
    const lastElementID3 = carousel3.children.length - 1;
    const lastElement3 = carousel3.children[lastElementID3];

    carousel3.children[lastElementID3].remove();

    carousel3.prepend(lastElement3);

    carousel3.style.left = -elementWidth3 + "px";
}

function moveFirstElementToEnd2() {
    const firstElement3 = carousel3.children[0];

    carousel3.children[0].remove();

    carousel3.style.left = -elementWidth3 + "px";

    carousel3.append(firstElement3);
}




