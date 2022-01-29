import { Card } from "../scripts/components/Сard.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js"
import PopupConfirmDeletion from "../scripts/components/PopupConfirmDeletion.js"
import {
    buttonEdit,
    inputName,
    inputJob,
    nameTitle,
    aboutMe,
    buttonAdd,
    formProfileEditing,
    cards,
    formElementCard,
    buttonAvatar,
    formElementAvatar,
    validationConfig,
    buttonProfilePopup,
    buttonCardPopup,
    buttonAvatarPopup
} from "../scripts/utils/constants.js";
import "../pages/index.css"

// валидируем попап редактирования профиля
const formValidatorProfile = new FormValidator(formProfileEditing, validationConfig);
formValidatorProfile.enableValidation();
// валидируем попап добавления карточек
const formValidatorCard = new FormValidator(formElementCard, validationConfig);
formValidatorCard.enableValidation();
// валидируем попап замены аватара
const formValidatorAvatar = new FormValidator(formElementAvatar, validationConfig);
formValidatorAvatar.enableValidation();

// Функция добавления карточек
const createCard = (items) => {
    const card = new Card(items, '.template',
        { handleCardClick }, {
        deleteCard:
            (items, element) => {
                popupConfirmDeletion.open();
                popupConfirmDeletion.setEventListeners(items, element);
            }
    }, {
        addLike:
            (items) => {
                return api.addLike(items)

            }
    }, {
        deleteLike: (items) => {
            return api.deleteLike(items)

        }
    });
    const cardElement = card.createCard(items);
    return cardElement;
};

// функция открытия попапа с изображением
function handleCardClick(items) {
    popupWithImage.open(items);
}

// функция меняющая надпись на кнопке при отправке данных
function addLoad(button) {
    button.textContent = "Сохранение...";
}

// функция меняющая надпись на кнопке на первоначальную в прифиле редактирования аватара и информации о себе
function deleteLoad(button) {
    button.textContent = "Сохранить";
}

function deleteLoadCard(button) {
    button.textContent = "Создать";
}

// попап изображения 
const popupWithImage = new PopupWithImage('#popup_image');
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
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-34/', '5f5add00-d466-4f85-8d24-2991878e59c1');
api
    .getItemsGard()
    .then((result) => {
        section.renderItems(result.reverse());
        console.log(result.reverse());
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });

// создаем класс попапа добавления карточек 
const popupAddCard = new PopupWithForm('#addCard', {
    formSubmitCallBack:
        (items) => {
            addLoad(buttonCardPopup);
            const cardData =
            {
                link: items.link_to_the_picture,
                name: items.title
            }
            api
                .addCard(cardData)
                .then((res) => {
                    const newCard = createCard(res);
                    cards.prepend(newCard);
                })
                .catch((err) => console.log(err))
                .finally(deleteLoadCard(buttonCardPopup))
        },
});
// слушаем попап добавления карточек 
popupAddCard.setEventListeners();

// отображаем информацию о пользователе на странице
const userInfo = new UserInfo({ nameTitle, aboutMe });

// попап редактирования иинформации о себе
const popupProfileEdit = new PopupWithForm('#editProfile', {
    formSubmitCallBack: (items) => {
        addLoad(buttonProfilePopup);
        api
            .editProfile(items)
            .then((res) => {
                userInfo.setUserInfo(res);
            })
            .catch((err) => console.log(err))
            .finally(deleteLoad(buttonProfilePopup))
    },
});
//слушаем редактирования иинформации о себе
popupProfileEdit.setEventListeners();

// попап удаления карточки
const popupConfirmDeletion = new PopupConfirmDeletion('#confirmDeletionCard', {
    deleteCard: (items, element) => {
        api
            .deleteCard(items)
            .then(() => {
                element.remove();
            })
            .catch((err) => console.log(err))

    },
});

// создаем попап замены изображения аватара
const popupReplaseAvatar = new PopupWithForm('#addAvatar', {
    formSubmitCallBack: (items) => {
        addLoad(buttonAvatarPopup);
        api.replaseAvatar(items)
            .then((res) => {
                userInfo.setUserInfo(res);
            })
            .catch((err) => console.log(err))
            .finally(deleteLoad(buttonAvatarPopup))
    },
})
popupReplaseAvatar.setEventListeners();

// слушаем кнопку попапа редактирования профиля
buttonEdit.addEventListener('click', () => {
    inputName.value = userInfo.getUserInfo().name;
    inputJob.value = userInfo.getUserInfo().aboutMe;
    popupProfileEdit.open();
});

// слушаем кнопку попапа редактирования карточек
buttonAdd.addEventListener('click', () => {
    popupAddCard.open();
    formValidatorCard.toggleButtonState();
});
// слушаем кнопку редактирования аватара
buttonAvatar.addEventListener('click', () => {
    popupReplaseAvatar.open();
    formValidatorAvatar.toggleButtonState();
});
// запрашиваю данные о пользователе от сервера
api
    .getUserInfo()
    .then((res) => {
        userInfo.setUserInfo(res);
    })
    .catch((err) => console.log(err))
