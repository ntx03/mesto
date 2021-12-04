// массив с классами попапов с данными
const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-error',
    inputErrorClass: 'popup__error-message_show',
    errorClass: 'popup__text-error'
}
// функция собиратель слушателей sumbit и input
function setEventLiseners(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass }) {
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(formElement, buttonElement, inactiveButtonClass)
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
            toggleButtonState(formElement, buttonElement, inactiveButtonClass)
            checkInputValidity(formElement, inputElement, { errorClass, inputErrorClass })
        })
    })
}
// функция которая валидирует поля ввода форм
function checkInputValidity(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config)
    } else {
        showInputError(formElement, inputElement, config)
    }
}
// если прошли вилидацию
function hideInputError(formElement, inputElement, config) {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
}
// если не прошли валидацию
function showInputError(formElement, inputElement, config) {
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(errorClass);
    errorElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}
// валидируем кнопку форм
function toggleButtonState(formElement, buttonElement, inactiveButtonClass) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    }
    else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
}
// функция запускающая валидацию сразу двух форм
function enableValidation(config) {
    const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass } = config;
    const forms = document.querySelectorAll(formSelector);
    forms.forEach(function (form) {
        setEventLiseners(form, { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass })
    })
}
enableValidation(validationConfig);