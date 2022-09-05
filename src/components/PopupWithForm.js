import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputValues = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputValues.forEach(data => {
            this._formValues[data.name] = data.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close(evt);
        })
    }

    close(evt) {
        super.close();
        this._form.reset();    }
}