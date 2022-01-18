// выбираем кнопку редактирования профиля
export const buttonEdit = document.querySelector('.profile__button-edit');
// выбираем класс попапа редактирования профиля (попап с профилем)
export const profilePopup = document.querySelector('#editProfile');
// выбираем класс строки попапа с именем (попап с профилем)
export const inputName = document.querySelector('.popup__text_input_name');
// выбираем класс строки попапа с информацией о себе (попап с профилем)
export const inputJob = document.querySelector('.popup__text_input_job');
// выбираем класс с именем профиля на сайте
export const nameTitle = document.querySelector('.profile__title');
// выбираем класс с информацией о себе на сайте
export const aboutMe = document.querySelector('.profile__subtitle');
// выбираем класс с кнопкой добавления карточек 
export const buttonAdd = document.querySelector('.profile__button-add');
// выбираем класс с открытия попапа с добавлением карточек
export const popupOpenCard = document.querySelector('#addCard');
// выбираем класс изображения в попапе который увиличивает изображение из карточки
export const popupImage = document.querySelector('.popup__image');
// выбираем класс попапа с изображением
export const popupImageForm = document.querySelector('#popup_image');
// Выбираем класс с попапа изображениями с текстом
export const popupImageText = document.querySelector('.popup__title-image');
// Находим форму редактирования профиля
export const formProfileEditing = document.querySelector('#profile_editing_form');
// класс контейнера  для карточек
export const cards = document.querySelector('.cards');
// Находим форму редактирования карточек
export const formElementCard = document.querySelector('#form_for_adding_photos');

// массив с данными добавляемых карточек
export const initialCards = [
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

export const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-error',
    inputErrorClass: 'popup__error-message_show',
    errorClass: 'popup__text-error'
}
