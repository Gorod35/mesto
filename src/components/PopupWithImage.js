import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._zoomImage = this._popup.querySelector('.popup__img');
        this._zoomImageCaption = this._popup.querySelector('.popup__imgcaption');
    }
    open(name, link) {
        super.open();
        this._name = name;
        this._link = link;
        this._zoomImage.src = this._link;
        this._zoomImageCaption.textContent = this._name;
        this._zoomImage.alt = this._name;
    }
}