import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
    buttonEdit,
    profilePopup,
    inputName,
    inputJob,
    nameTitle,
    aboutMe,
    buttonAdd,
    popupOpenCard,
    popupImage,
    popupImageForm,
    popupImageText,
    formProfileEditing,
    cards,
    formElementCard,
    initialCards,
    validationConfig,
} from "../scripts/utils/constants.js";
import "../pages/index.css"

// валидируем попап редактирования профиля
const formValidatorProfile = new FormValidator(formProfileEditing, validationConfig);
formValidatorProfile.enableValidation();

// валидируем попап добавления карточек
const formValidatorCard = new FormValidator(formElementCard, validationConfig);
formValidatorCard.enableValidation();

// Функция добавления карточек
const createCard = (items) => {
    const card = new Card(items, '.template',
        { handleCardClick },
        popupImage, popupImageText);
    const cardElement = card.createCard(items);
    return cardElement;
};

// функция открытия попапа с изображением
function handleCardClick(items) {
    popupWithImage.open(items);
}

// попап изображения 
const popupWithImage = new PopupWithImage(popupImageForm);
popupWithImage.setEventListeners();

// Генерация карточек
const section = new Section(
    {
        itemRender: (item) => {
            section.addItem(createCard(item));
        },
    },
    cards
);
section.renderItems(initialCards);

// создаем класс попапа добавления карточек 
const popupAddCard = new PopupWithForm(popupOpenCard, {
    formSubmitCallBack:
        (items) => {
            const cardData = {
                link: items.link_to_the_picture,
                name: items.title
            };
            const newCard = createCard(cardData);
            cards.prepend(newCard);
        },
});
// слушаем попап добавления карточек 
popupAddCard.setEventListeners();

// отображаем информацию о пользователе на странице
const userInfo = new UserInfo({ nameTitle, aboutMe });

// попап редактирования иинформации о себе
const popupProfileEdit = new PopupWithForm(profilePopup, {
    formSubmitCallBack: (items) => {
        userInfo.setUserInfo(items);
    },
});
//слушаем редактирования иинформации о себе
popupProfileEdit.setEventListeners();

// слушаем кнопку попапа редактирования профиля
buttonEdit.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputJob.value = userInfo.getUserInfo().about_me;
    popupProfileEdit.open();
});

// слушаем кнопку попапа редактирования карточек
buttonAdd.addEventListener('click', () => {
    popupAddCard.open();
    formValidatorCard.toggleButtonState();
});

