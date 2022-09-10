import { Api } from './Api.js';
import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    handlerFormSubmit(handler) {
        this._handlerFormSubmit = handler;
    }

    // sendCardElement(cardElement, cardId) {
    //     this._cardElement = cardElement;
    //     this._cardId = cardId;
    // }

    setEventListeners() {
        super.setEventListeners();

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerFormSubmit();
            this.close(evt);
        })
    }
}