// выбираем кнопку редактирования профиля
const buttonEdit = document.querySelector('.profile__button-edit');

// выбираем класс попапа
const popupOpen = document.querySelector('.popup');

// Выбираем класс закрытия попапа (крестик)
const popupExit = document.querySelector('.popup__icon');

// выбираем класс строки попапа с именем
const inputName = document.querySelector('.popup_input_name');

// выбираем класс строки попапа с информацией о себе
const inputJob = document.querySelector('.popup_input_job');

// выбираем класс формы попапа
const formElement = document.querySelector('.popup__container');

// выбираем класс с именем профиля на сайте
const nameTitle = document.querySelector('.profile__title');

// выбираем класс с информацией о себе на сайте
const aboutMe = document.querySelector('.profile__subtitle');


function showClick() {
    popupOpen.classList.add('popup_open');
    inputName.value = nameTitle.textContent;
    inputJob.value = aboutMe.textContent;
}

function popupQuit() {
    popupOpen.classList.remove('popup_open');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameTitle.textContent = inputName.value;
    aboutMe.textContent = inputJob.value;
    popupQuit();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

buttonEdit.addEventListener('click', showClick);
popupExit.addEventListener('click', popupQuit);
formElement.addEventListener('submit', formSubmitHandler);