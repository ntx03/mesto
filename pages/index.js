let buttomedit = document.querySelector('.profile__buttom-edit');
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

let fieldone = document.querySelector('.popup__field-one');
let fieldtwo = document.querySelector('.popup__field-two');
let formElement = document.querySelector('.popup__button');

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameOne = fieldone.value;
    const nameTwo = fieldtwo.value;
    console.log(nameOne);
    console.log(nameTwo);
    // Выберите элементы, куда должны быть вставлены значения полей
    const name = document.querySelector('.profile__title');
    const aboutMe = document.querySelector('.profile__subtitle');
    // Вставьте новые значения с помощью textContent
    name.textContent = nameOne;
    aboutMe.textContent = nameTwo;
    popupopen.classList.remove('popup_open');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);