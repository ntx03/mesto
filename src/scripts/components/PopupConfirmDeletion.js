import Popup from "./Popup.js";

export default class PopupConfirmDeletion extends Popup {
    constructor(popupSelector, { deleteCard }) {
        super(popupSelector);
        this._deleteCard = deleteCard;
        this._form = this._popup.querySelector('.popup__content');
        this._formSubmit = this._formSubmit.bind(this);
        this._button = document.querySelector('#popup__button_confirm');
    }

    // Сабмит формы
    _formSubmit(evt) {
        evt.preventDefault();
        this._deleteCard(this._items, this._element);
        this._form.removeEventListener('submit', this._formSubmit);
    }

    // слушатель событий
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._formSubmit);
    }

    open(items, element) {
        this._items = items;
        this._element = element;
        super.open();
    }

}


