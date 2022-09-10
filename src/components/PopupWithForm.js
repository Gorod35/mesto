import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputValues = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__submit-btn');
        this._saveText = this._submitButton.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputValues.forEach(data => {
            this._formValues[data.name] = data.value;
        });
        return this._formValues;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Сохранение...";
        } else {

            this._submitButton.textContent = this._saveText;
        }
    }

    setEventListeners() {
        super.setEventListeners();

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            // this.close(evt);
            // console.log(this._formValues);
        })
    }

    close(evt) {
        super.close();
        this._form.reset();    }
}