export class Card {
    constructor(items, template, imagePopup) {
        this._items = items;
        this._template = template;
        this._element = this._getTemplate();
        this._cardNoLike = this._element.querySelector('.card__heart');;
        this._popupImage = document.querySelector('.popup__image');
        this._cardDelete = this._element.querySelector('.card__delete');
        this._imagePopup = imagePopup;
    }

    _getTemplate() {
        this._cardTemplate = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
        return this._cardTemplate;
    }

    createCard() {
        //this._element = this._getTemplate();
        this._element.querySelector('.card__title').textContent = this._items.name;
        const cardImage = this._element.querySelector('.card__image');
        cardImage.src = this._items.link;
        cardImage.alt = this._items.name;
        //debugger;
        this._likeCard();
        this._deleteCard();
        this._openPopup();
        return this._element;
    }

    _likeCard() {
        this._cardNoLike.addEventListener('click', () => {
            this._cardNoLike.classList.toggle('card__heart_like');
        });

    }

    _openPopup() {
        const cardImage = this._element.querySelector('.card__image');
        cardImage.addEventListener('click', () => {
            const popupImage = document.querySelector('.popup__image');
            const popupImageText = document.querySelector('.popup__title-image');
            popupImage.src = this._items.link;
            popupImage.alt = this._items.name;
            popupImageText.textContent = this._items.name;
            this._imagePopup();

        });
    }

    _deleteCard() {
        this._cardDelete.addEventListener('click', () => {
            this._element.remove();
        })


    }
}
