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

// форма редактирования карточек
const formElementCard = document.querySelector('#form_for_adding_photos');

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
    const cardImage = cardTemplate.querySelector('.card__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    const cardDelete = cardTemplate.querySelector('.card__delete');
    const cardNoLike = cardTemplate.querySelector('.card__heart');
    const popupCardtext = cardTemplate.querySelector('.card__title');
    // удаление карточки
    cardDelete.addEventListener('click', () => {
        cardTemplate.remove();
    })
    // функция отметки карточки лайками
    cardNoLike.addEventListener('click', function (event) {
        const target = event.target;
        target.classList.toggle('card__heart_like');
    });
    // открытие попапа с фотографией по клику карточки
    cardImage.addEventListener('click', function (event) {
        const target = event.target;
        popupImage.src = target.src;
        popupImage.alt = popupCardtext.textContent;
        popupImageText.textContent = popupCardtext.textContent;
        openPopupImage();
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
    inputTitle.value = '';
    inputPicture.value = '';
    quitPopupCard()
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_open')
        openedPopup.classList.remove('popup_open');
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
    popup.addEventListener('click', function (event) {
        const target = event.target;
        target.classList.remove('popup_open');
    });
}
// навешиваем слушатель на оверлэй попапа профиля
closePopupOverlay(profilePopup);
// навешиваем слушатель на оверлэй попапа добавления карточек
closePopupOverlay(popupOpenCard);
//навешиваем слушатель на оверлэй попапа  фотографии карточек
closePopupOverlay(popupImageForm);


// функция валидирования кнопки
function validityButton(formElement) {
    const buttonElement = formElement.querySelector('.popup__button');
    const inactiveButtonClass = 'popup__button-error';
    toggleButtonState(formElement, buttonElement, inactiveButtonClass);
}


// Попап редактирование профиля(открытие)
function openPopupProfile() {
    openPopup(profilePopup);
    inputName.value = nameTitle.textContent;
    inputJob.value = aboutMe.textContent;
    // const { formSelector, inputSelector, submitButtonSelector, inputErrorClass } = validationConfig;

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
    validityButton(formElementCard);
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

