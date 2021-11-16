// выбираем кнопку редактирования профиля
const buttonEdit = document.querySelector('.profile__button-edit');
// выбираем класс попапа редактирования профиля (попап с профилем)
const popupOpen = document.querySelector('#editProfile');
// Выбираем класс закрытия попапа (крестик) (попап с профилем)
const popupExit = document.querySelector('.popup__icon');
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
const formElement = document.querySelector('.popup__content');
// выбираем класс с именем профиля на сайте
const nameTitle = document.querySelector('.profile__title');
// выбираем класс с информацией о себе на сайте
const aboutMe = document.querySelector('.profile__subtitle');
// выбираем класс с заголовком popupа (попап с профилем)
const popupTitle = document.querySelector('.popup__title');
// выбираем класс с кнопкой добавления карточек 
const buttonAdd = document.querySelector('.profile__button-add');
// выбираем класс с открытия попапа с добавлением карточек
const popupOpenCard = document.querySelector('#addCard');
// выбираем класс изображения из карточки
const cardImage = document.querySelectorAll('.card__image');
// выбираем класс изображения в попапе который увиличивает изображение из карточки
const popupImage = document.querySelector('.popup__image');
// выбираем класс попапа с изображением
const popupImageForm = document.querySelector('#popup_image');
// выбираем класс с текстом попапа с изображением
const popupImageText = document.querySelector('.popup__title-image');
// выбыраем класс с титулом изображения карточки 
const popupCardtext = document.querySelectorAll('.card__title');
// выбыраем класс с титулом изображения template
const cardText = document.querySelector('.card__title');
// Выбираем класс закрытия попапа (крестик) в изображении
const popupIconImageQuit = document.querySelector('.popup__icon-image');
// выбираем класс строки с сердечком(без лайка)
const cardNoLike = document.querySelectorAll('.card__heart');
// класс тэмплэйт
const template = document.querySelector('.template');
// 


// Попап редактирование профиля(открытие)
function showClick() {
    popupOpen.classList.add('popup_open');
    inputName.value = nameTitle.textContent;
    inputJob.value = aboutMe.textContent;
}
// Попап редактирование профиля(закрытие)
function popupQuit() {
    popupOpen.classList.remove('popup_open');
}
// Попап редактирование профиля(внесение данных)
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = inputName.value;
    aboutMe.textContent = inputJob.value;
    popupQuit();
}
//Попап добавление карточек(открытие)
function popupOpenPlus() {
    popupOpenCard.classList.add('popup_open');
    inputTitle.value = '';
    inputPicture.value = '';
}
// Добавление карточек 
function addCard(evt) {
    evt.preventDefault();
    cardText.textContent = inputTitle.value;
    aboutMe.textContent = inputJob.value;
    popupQuit();
}
//попап добавление карточек(закрытие)
function popupQuitCard() {
    popupOpenCard.classList.remove('popup_open');
}

// открытие попапа с изображением из карточек
function popupOpenImage() {
    popupImageForm.classList.add('popup_open');
}
// закрытие попапа с изображением из карточек
function popupImageQuit() {
    popupImageForm.classList.remove('popup_open');
}

// попап редактирования профиля
buttonEdit.addEventListener('click', showClick);
popupExit.addEventListener('click', popupQuit);
formElement.addEventListener('submit', formSubmitHandler);

// попап редактирования карточек
popupExitCard.addEventListener('click', popupQuitCard);
buttonAdd.addEventListener('click', popupOpenPlus);

// попап с картинкой
for (let i = 0; i < cardImage.length; i++) {
    cardImage[i].addEventListener('click', function (event) {
        const target = event.target;
        popupImage.src = target.src;
        popupImageText.textContent = popupCardtext[i].textContent;
        popupOpenImage();
    });
}
popupIconImageQuit.addEventListener('click', popupImageQuit);

// функция лайка
for (let i = 0; i < cardNoLike.length; i++) {
    cardNoLike[i].addEventListener('click', function (event) {
        const target = event.target;
        target.classList.toggle('card__heart_like');
    });
}

// 