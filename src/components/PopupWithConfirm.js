import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(card) {
        super.open();
        this._cardId = card._data._id;
    }


    handlerFormSubmit(handler) {
        this._handlerFormSubmit = handler;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerFormSubmit(this._cardId);
            this.close(evt);
        })
    }
}