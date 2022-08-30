  export class FormValidator {

    constructor(settings, formElement) {
        this._formElement = formElement;
        this._settings = settings;
    }

    _handlerInputForm(evt) {
        this._validateForm();
        this._validateInput(evt.target);
    }

    enableValidation() {
        this._formElement.addEventListener('input', (evt) => {
            this._handlerInputForm(evt)
        });
    }

    _validateForm() {
        this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
        if (this._formElement.checkValidity()) {
            this._submitButton.removeAttribute('disabled');
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        } else {
            this.disableSubmitButton();
        }
    }

    disableSubmitButton() {
        this._submitButton.setAttribute('disabled', true);
        this._submitButton.classList.add(this._settings.inactiveButtonClass);
    }

    _validateInput(input) {
        this._errorElement = input.parentNode.querySelector(`.${input.name}-error`);
        this._errorElement.textContent = input.validationMessage;
        if (input.validationMessage) {
            input.classList.add(this._settings.inputErrorClass);
        } else {
            input.classList.remove(this._settings.inputErrorClass);
        }
    }
  }