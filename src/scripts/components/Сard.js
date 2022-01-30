export class Card {
    constructor(items, template, { handleCardClick }, { deleteCard }, { addLike }, { deleteLike }, userId) {
        this._items = items;
        this._template = template;
        this._element = this._getTemplate();
        this._cardNoLike = this._element.querySelector('.card__heart');;
        this._cardDelete = this._element.querySelector('.card__delete');
        this._cardImage = this._element.querySelector('.card__image');
        this._cardNumberLike = this._element.querySelector('.card__heard-number');
        this._handleCardClick = handleCardClick;
        this._userID = userId;
        this._deleteCard = deleteCard;
        this._addLike = addLike;
        this._deleteLike = deleteLike;
    }
    // получаем Id карточки
    getId() {
        return this._cardId = this._items._id;
    }
    // обновляем данные о лайках(ставим лайк)
    setLike(res) {
        this._cardNumberLike.textContent = res.likes.length;
        this._cardNoLike.classList.add('card__heart_like');
    }
    // обновляем данные о лайках(удаляем лайк)
    removeLike(res) {
        this._cardNumberLike.textContent = res.likes.length;
        this._cardNoLike.classList.remove('card__heart_like');
    }

    //  создание карточки
    createCard() {
        this._element.querySelector('.card__title').textContent = this._items.name;
        this._cardImage.src = this._items.link;
        this._cardImage.alt = this._items.name;
        this._cardNumberLike.textContent = this._items.likes.length;
        if (this._userID === this._items.owner._id) {
            this._cardDelete.classList.add('card__delete_visible');
        }
        else {
            this._cardDelete.classList.remove('card__delete_visible');
        }
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
            if (!this._cardNoLike.classList.contains('card__heart_like')) {
                this._addLike(this.getId());
            }
            else {
                this._deleteLike(this.getId());
            }
        });

        // слушатель открытия попапа изображений карточек
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._items);
        });

        // слушатель удаления карточек
        this._cardDelete.addEventListener('click', () => {
            this._deleteCard(this._items, this._element);
        })

        // проверяем лайки которые поставил пользователь
        if (this._items.likes.some(items => items._id === this._userID)) {
            this._cardNoLike.classList.add("card__heart_like");
        }

    }

}
