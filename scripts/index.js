// выбираем кнопку редактирования профиля
const buttonEdit = document.querySelector('.profile__button-edit');
// выбираем класс попапа редактирования профиля (попап с профилем)
const profilePopup = document.querySelector('#editProfile');
// Выбираем класс закрытия попапа (крестик) (попап с профилем)
const popupExit = document.querySelector('.popup__icon-profile');
// Выбираем класс закрытия попапа (крестик) в карточках (попап с карточками)
const popupExitCard = document.querySelector('.popup__icon-card');
// выбираем класс строки попапа с именем (попап с профилем)
const inputName = document.querySelector('.popup__text_input_name');
// выбираем класс строки попапа с информацией о себе (попап с профилем)
const inputJob = document.querySelector('.popup__text_input_job');
// выбираем класс строки попапа с названием карточки (попап с карточками)
const inputTitle = document.querySelector('.popup__text_input_title');
// выбираем класс строки попапа с адресом картинки карточки (попап с карточками)
const inputPicture = document.querySelector('.popup__text_input_picture');
// выбираем класс формы попапа (попап с профилем)
const formProfile = document.querySelector('.popup__content-profile');
// выбираем класс с именем профиля на сайте
const nameTitle = document.querySelector('.profile__title');
// выбираем класс с информацией о себе на сайте
const aboutMe = document.querySelector('.profile__subtitle');
// выбираем класс с кнопкой добавления карточек 
const buttonAdd = document.querySelector('.profile__button-add');
// выбираем класс с открытия попапа с добавлением карточек
const popupOpenCard = document.querySelector('#addCard');
// выбираем класс изображения в попапе который увиличивает изображение из карточки
const popupImage = document.querySelector('.popup__image');
// выбираем класс попапа с изображением
const popupImageForm = document.querySelector('#popup_image');
// Выбираем класс закрытия попапа (крестик) в изображении
const popupIconImageQuit = document.querySelector('.popup__icon-image');
// Выбираем класс с попапа изображениями с текстом
const popupImageText = document.querySelector('.popup__title-image');
// Находим форму редактирования профиля
const formProfileEditing = document.querySelector('#profile_editing_form');
// класс контейнера  для карточек
const cards = document.querySelector('.cards');
// класс с формой попапа карточек
const cardForm = document.querySelector('.popup__content-card');
// Находим форму редактирования карточек
const formElementCard = document.querySelector('#form_for_adding_photos');

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// массив с данными добавляемых карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-error',
    inputErrorClass: 'popup__error-message_show',
    errorClass: 'popup__text-error'
}

const formValidatorProfile = new FormValidator(formProfileEditing, validationConfig);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(formElementCard, validationConfig);
formValidatorCard.enableValidation();

// Функция добавления карточек
const createCard = (items) => {
    const card = new Card(items, '.template', openPopupImage, popupImage, popupImageText);
    const cardElement = card.createCard(items);
    return cardElement;
};

// перебор массива с карточками
const result = initialCards.map((items) => {
    return createCard(items);
});
// добавление карточек при загрузке сайта 

cards.prepend(...result);

// функция добавления карточки из попапа
const sumbitCardAdd = (evt) => {
    evt.preventDefault();
    const cardData = {
        link: inputPicture.value,
        name: inputTitle.value
    };
    const newCard = createCard(cardData);
    cards.prepend(newCard);
    inputTitle.value = '';
    inputPicture.value = '';
    quitPopupCard()
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_open')
        closePopup(openedPopup)
    }
}

// общая функция открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_open');
    // навешиваем слушатель закрытия попапа по клавише Esc
    document.addEventListener('keydown', closePopupEsc);
}

// общая функция закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_open');
    // снимаем слушатель закрытия попапа по клавише Esc
    document.removeEventListener('keydown', closePopupEsc);
}

// функция навешиваня слушателя на попап
function closePopupOverlay(popup) {
    // слушатель клика закрытия overlay
    popup.addEventListener('click', function () {
        const openedPopup = document.querySelector('.popup_open')
        closePopup(openedPopup)
    });
}
// находим оверлэй и навешиваем слушатель на оверлэй попапа профиля
const overlayProfile = document.querySelector('#overlay_profile');
closePopupOverlay(overlayProfile);
// находим оверлэй и навешиваем слушатель на оверлэй попапа добавления карточек
const overlayCard = document.querySelector('#overlay_card');
closePopupOverlay(overlayCard);
//навешиваем слушатель на оверлэй попапа  фотографии карточек
const overlayImage = document.querySelector('#overlay_image');
closePopupOverlay(overlayImage);


// Попап редактирование профиля(открытие)
function openPopupProfile() {
    openPopup(profilePopup);
    inputName.value = nameTitle.textContent;
    inputJob.value = aboutMe.textContent;
}

// Попап редактирование профиля(закрытие)
function quitPopupProfile() {
    closePopup(profilePopup);
}

// Попап редактирование профиля(внесение данных)
function submitProfile(evt) {
    evt.preventDefault();
    nameTitle.textContent = inputName.value;
    aboutMe.textContent = inputJob.value;
    quitPopupProfile();
}

//Попап добавление карточек(открытие)
function openPopupCardForm() {
    openPopup(popupOpenCard);
}

//попап добавление карточек(закрытие)
function quitPopupCard() {
    closePopup(popupOpenCard);
    formValidatorCard.toggleButtonState();
}

// открытие попапа с изображением из карточек
function openPopupImage() {
    openPopup(popupImageForm);
}

// закрытие попапа с изображением из карточек
function quitPopupImage() {
    closePopup(popupImageForm);
}

// попап редактирования профиля
buttonEdit.addEventListener('click', openPopupProfile);
popupExit.addEventListener('click', quitPopupProfile);
formProfile.addEventListener('submit', submitProfile);

// попап редактирования карточек
popupExitCard.addEventListener('click', quitPopupCard);
buttonAdd.addEventListener('click', openPopupCardForm);
cardForm.addEventListener('submit', sumbitCardAdd);

// попап с картинкой
popupIconImageQuit.addEventListener('click', quitPopupImage);

