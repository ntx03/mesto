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
    _formSubmit(items, element) {
        this._deleteCard(items, element);
        this.close();
    }

    // слушатель событий
    setEventListeners(items, element) {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(items, element);
        });
    }

}


