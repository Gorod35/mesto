import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector, name, link) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }
    open() {
        this._popup.classList.add('popup__opened');
        document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
        this._popup.querySelector('.popup__img').src = this._link;
        this._popup.querySelector('.popup__imgcaption').textContent = this._name;
        this._popup.querySelector('.popup__img').alt = this._name;
    }
}