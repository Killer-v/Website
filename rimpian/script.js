let offset = -600;
const left_button = document.getElementById('button_left_carousel');
const right_button = document.getElementById('button_right_carousel');
const carousel = document.getElementById('carousel');

right_button.addEventListener('click', function () {
   offset = offset + 360;
   if (offset > 560) {
      offset = -600;
   }
   carousel.style.left = -offset + "px";
});
left_button.addEventListener('click', function () {
   offset = offset - 360;
   if (offset < -600) {
      offset = 560;
   }
   carousel.style.left = -offset + "px";
});
