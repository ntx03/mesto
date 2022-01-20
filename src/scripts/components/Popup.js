export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._overlay = this._popup.querySelector('.popup__overlay');
        this._icon = this._popup.querySelector('.popup__icon');
        this.close = this.close.bind(this);
    }
    // метод закрытия попапа по клавише escape
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    // метод открытия попапа
    open() {
        this._popup.classList.add('popup_open');
        document.addEventListener('keydown', this._handleEscClose);
    }
    // метод закрытия попапа
    close() {
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    // слушаем оверлэй и иконку закрытия попапа 
    setEventListeners() {
        this._overlay.addEventListener('click', this.close);
        this._icon.addEventListener('click', this.close);
    }

}