import { Api } from './Api.js';
import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    handlerFormSubmit(handler) {
        this._handlerFormSubmit = handler;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerFormSubmit();
            this.close(evt);
        })
    }
}