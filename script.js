const openPopUp = document.getElementById('open_pop_up1');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', () => {
    popUp.classList.add('pop_up_active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('pop_up_active');
})