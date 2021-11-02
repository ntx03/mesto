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

let fieldone = document.querySelector('.popup__field-one');
let fieldtwo = document.querySelector('.popup__field-two');
let formElement = document.querySelector('.popup__button');

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    fieldone.getAttribute('value');
    fieldtwo.getAttribute('value');
    console.log(fieldone.getAttribute('value'));
    console.log(fieldtwo.getAttribute('value'));
    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile__title');
    let aboutme = document.querySelector('.profile__subtitle');
    console.log(name);
    // Вставьте новые значения с помощью textContent
    name.textContent = name.setAttribute('value', fieldone.getAttribute('value'));
    aboutme.textContent = aboutme.setAttribute('value', fieldtwo.getAttribute('value'));
    popupopen.classList.remove('popup_open');
    console.log(name.textContent);
    console.log(aboutme.textContent);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);