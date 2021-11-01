let buttomedit = document.querySelector('.profile_buttom_edit');
let popupopen = document.querySelector('.popup');
function showClick() {
    popupopen.classList.add('popup_open');
}
buttomedit.addEventListener('click', showClick);

let popupexit = document.querySelector('.popup__icon');

function popupquit() {
    popupopen.classList.remove('popup_open');
}
popupexit.addEventListener('click', popupquit);
