export class Card {
    constructor(items, template, { handleCardClick }, popupImage, popupImageText) {
        this._items = items;
        this._template = template;
        this._element = this._getTemplate();
        this._cardNoLike = this._element.querySelector('.card__heart');;
        this._cardDelete = this._element.querySelector('.card__delete');
        this._cardImage = this._element.querySelector('.card__image');
        this._handleCardClick = handleCardClick;
        this._popupImage = popupImage;
        this._popupImageForm = document.querySelector('#popup_image');
        this._popupImageText = popupImageText;
    }

    //  создание карточки
    createCard() {
        this._element.querySelector('.card__title').textContent = this._items.name;
        this._cardImage.src = this._items.link;
        this._cardImage.alt = this._items.name;
        this._setEventListeners();
        return this._element;
    }
    // получение разметки карточки
    _getTemplate() {
        this._cardTemplate = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
        return this._cardTemplate;
    }

    _setEventListeners() {
        // слушатель лайка карточек
        this._cardNoLike.addEventListener('click', () => {
            this._cardNoLike.classList.toggle('card__heart_like');
        });

        // слушатель открытия попапа изображений карточек
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._items);
        });

        // слушатель удаления карточек
        this._cardDelete.addEventListener('click', () => {
            this._element.remove();
        })

    }
}
