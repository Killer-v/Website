const left_button = document.getElementById('button_left_carousel');
const right_button = document.getElementById('button_right_carousel');
const carousel = document.getElementById('carousel');

const elementWidth = 356;

moveLastElementToFront();

right_button.addEventListener('click', function (event) {
   event.preventDefault();

   carousel.classList.add('animate');

   carousel.style.left = -(elementWidth * 2) + "px";

   setTimeout(function () {
      carousel.classList.remove('animate');

      moveFirstElementToEnd();
   }, 250);
});

left_button.addEventListener('click', function (event) {
   event.preventDefault();

   carousel.classList.add('animate');

   carousel.style.left = "0px";

   setTimeout(function () {
      carousel.classList.remove('animate');

      moveLastElementToFront();
   }, 250);
});

function moveLastElementToFront() {
   const lastElementID = carousel.children.length - 1;
   const lastElement = carousel.children[lastElementID];

   carousel.children[lastElementID].remove();

   carousel.prepend(lastElement);

   carousel.style.left = -elementWidth + "px";
}

function moveFirstElementToEnd() {
   const firstElement = carousel.children[0];

   carousel.children[0].remove();

   carousel.style.left = -elementWidth + "px";

   carousel.append(firstElement);
}