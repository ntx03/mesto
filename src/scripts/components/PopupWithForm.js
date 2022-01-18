import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { formSubmitCallBack }) {
        super(popupSelector);
        this._formSubmitCallBack = formSubmitCallBack;
        this._formButton = this._popupSelector.querySelector('.popup__button');
        this._form = this._popupSelector.querySelector('.popup__content');
        this._inputs = Array.from(this._form.querySelectorAll(".popup__text"));
        this._formSubmit = this._formSubmit.bind(this);

    }

    //* Сабмит формы
    _formSubmit() {
        this._formSubmitCallBack(this._getInputValues());
        this.close();

    }

    // слушатель событий
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => { this._formSubmit(); });
    }

    // закрытие попапа
    close() {
        super.close();
        this._form.reset();
    }

    // сбор данных со всех полей 
    _getInputValues() {
        const data = {};
        this._inputs.forEach((input) => {
            data[input.name] = input.value;
        });
        return data;

    }

}
