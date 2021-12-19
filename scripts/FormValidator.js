export class FormValidator {
    constructor(popupForm, popupElements) {
        this._popupForm = popupForm;
        this._formSelector = popupElements.formSelector;
        this._inputSelector = popupElements.inputSelector;
        this._submitButtonSelector = popupElements.submitButtonSelector;
        this._inactiveButtonClass = popupElements.inactiveButtonClass;
        this._inputErrorClass = popupElements.inputErrorClass;
        this._errorClass = popupElements.errorClass;
    }

    enableValidation() {
        const forms = document.querySelectorAll(this._formSelector);
        forms.forEach((form) => {
            this._setEventLiseners(form);
        })
    }

    _setEventLiseners() {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const inputList = Array.from(this._popupForm.querySelectorAll(this._inputSelector));
        const buttonElement = this._popupForm.querySelector(this._submitButtonSelector);
        this.toggleButtonState(buttonElement)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this.toggleButtonState(buttonElement);
                this._checkInputValidity(inputElement);
            })
        })
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement)
        } else {
            this._showInputError(inputElement)
        }
    }

    _hideInputError(inputElement) {
        this._inputElement = inputElement;
        const errorElement = this._popupForm.querySelector(`#${this._inputElement.id}-error`);
        this._inputElement.classList.remove(this._errorClass);
        errorElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }
    _showInputError(inputElement) {
        this._inputElement = inputElement;
        const errorElement = this._popupForm.querySelector(`#${this._inputElement.id}-error`);
        this._inputElement.classList.add(this._errorClass);
        errorElement.classList.add(this._inputErrorClass);
        errorElement.textContent = this._inputElement.validationMessage;
    }
    toggleButtonState(buttonElement) {
        this._buttonElement = buttonElement;
        if (this._popupForm.checkValidity()) {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
        else {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }
}