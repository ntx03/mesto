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
// выбираем класс с заголовком popupа (попап с профилем)
const popupTitle = document.querySelector('.popup__title');
// выбираем класс с кнопкой добавления карточек 
const buttonAdd = document.querySelector('.profile__button-add');
// выбираем класс с открытия попапа с добавлением карточек
const popupOpenCard = document.querySelector('#addCard');
// выбираем класс изображения из карточки
//const cardImage = document.querySelectorAll('.card__image');
// выбираем класс изображения в попапе который увиличивает изображение из карточки
const popupImage = document.querySelector('.popup__image');
// выбираем класс попапа с изображением
const popupImageForm = document.querySelector('#popup_image');
// выбираем класс с текстом попапа с изображением
const popupImageText = document.querySelector('.popup__title-image');
// выбыраем класс с титулом изображения template
const cardText = document.querySelector('.card__title');
// Выбираем класс закрытия попапа (крестик) в изображении
const popupIconImageQuit = document.querySelector('.popup__icon-image');
// класс тэмплэйт добавление карточки
const template = document.querySelector('.template');
// класс контейнера  для карточек
const cards = document.querySelector('.cards');
// класс с формой попапа карточек
const cardForm = document.querySelector('.popup__content-card');

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

// Функция добавления карточек
const createCard = (item) => {
    const cardTemplate = template.content.querySelector('.card').cloneNode(true);
    cardTemplate.querySelector('.card__title').textContent = item.name;
    cardTemplate.querySelector('.card__image').src = item.link;
    cardTemplate.querySelector('.card__image').alt = item.name;
    const cardDelete = cardTemplate.querySelector('.card__delete');
    const cardImage = cardTemplate.querySelector('.card__image');
    const cardNoLike = cardTemplate.querySelector('.card__heart');
    const popupCardtext = cardTemplate.querySelector('.card__title');
    cardDelete.addEventListener('click', () => {
        cardTemplate.remove();
    })
    cardNoLike.addEventListener('click', function (event) {
        const target = event.target;
        target.classList.toggle('card__heart_like');
    });

    cardImage.addEventListener('click', function (event) {
        const target = event.target;
        popupImage.src = target.src;
        popupImageText.textContent = popupCardtext.textContent;
        popupOpenImage();
    });

    return cardTemplate;
}
// перебор массива с карточками
const result = initialCards.map((item) => {
    return createCard(item);
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
    inputTitle.value.value = "";
    popupQuitCard()
}

// общая функция открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_open');
}

// общая функция закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_open');
}

// Попап редактирование профиля(открытие)
function popupProfileOpen() {
    openPopup(profilePopup);
    inputName.value = nameTitle.textContent;
    inputJob.value = aboutMe.textContent;
}

// Попап редактирование профиля(закрытие)
function popupProfileQuit() {
    closePopup(profilePopup);
}

// Попап редактирование профиля(внесение данных)
function submitProfile(evt) {
    evt.preventDefault();
    nameTitle.textContent = inputName.value;
    aboutMe.textContent = inputJob.value;
    popupProfileQuit();
}

//Попап добавление карточек(открытие)
function popupOpenCardForm() {
    openPopup(popupOpenCard);
    inputTitle.value = '';
    inputPicture.value = '';
}

//попап добавление карточек(закрытие)
function popupQuitCard() {
    closePopup(popupOpenCard);
}

// открытие попапа с изображением из карточек
function popupOpenImage() {
    openPopup(popupImageForm);
}

// закрытие попапа с изображением из карточек
function popupImageQuit() {
    closePopup(popupImageForm);
}

// попап редактирования профиля
buttonEdit.addEventListener('click', popupProfileOpen);
popupExit.addEventListener('click', popupProfileQuit);
formProfile.addEventListener('submit', submitProfile);

// попап редактирования карточек
popupExitCard.addEventListener('click', popupQuitCard);
buttonAdd.addEventListener('click', popupOpenCardForm);
cardForm.addEventListener('submit', sumbitCardAdd);

// попап с картинкой
popupIconImageQuit.addEventListener('click', popupImageQuit);
