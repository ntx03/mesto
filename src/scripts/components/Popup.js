export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._overlaySelector = this._popupSelector.querySelector('.popup__overlay');
        this._iconSelector = this._popupSelector.querySelector('.popup__icon');
        this.close = this.close.bind(this);
    }
    // метод закрытия попапа по клавише escape
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_open');
            openedPopup.classList.remove('popup_open');
        }
    }
    // метод открытия попапа
    open() {
        this._popupSelector.classList.add('popup_open');
        document.addEventListener('keydown', this._handleEscClose);
    }
    // метод закрытия попапа
    close() {
        this._popupSelector.classList.remove('popup_open');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    // слушаем оверлэй и иконку закрытия попапа 
    setEventListeners() {
        this._overlaySelector.addEventListener('click', this.close);
        this._iconSelector.addEventListener('click', this.close);
    }

}