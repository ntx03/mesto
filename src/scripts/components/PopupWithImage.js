import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupSelector.querySelector(".popup__image");
        this._imageSubtitle = this._popupSelector.querySelector(
            ".popup__title-image"
        );
    }

    // Перезапись родительского метода
    open(items) {
        super.open();
        this._image.src = items.link;
        this._image.alt = items.name;
        this._imageSubtitle.textContent = items.name;
    }

}