import { openPopup } from "./index.js";

export class Card {

    constructor(data, templateSelector, popupSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._popupSelector = popupSelector;
    }
  
    _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card__item').cloneNode(true);
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__image').src = this._link;
      this._element.querySelector('.card__image').alt = this._name;
      this._element.querySelector('.card__title').textContent = this._name;
      this._setEventListeners();
      return this._element;
    }
  
    _setEventListeners() {
      this._element.querySelector('.card__image').addEventListener('click', () => {
        this._handleCardClick();
      });
  
      this._element.querySelector('.card__like-btn').addEventListener('click', () => {
        this._handleLikeClick();
      });
  
      this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
        this._handleDeleteClick();
      })
    }
  
    _handleCardClick() {
      document.querySelector(this._popupSelector).querySelector('.popup__img').src = this._link;
      document.querySelector(this._popupSelector).querySelector('.popup__imgcaption').textContent = this._name;
      document.querySelector(this._popupSelector).querySelector('.popup__img').alt = this._name;
      openPopup(document.querySelector(this._popupSelector));
    }
  
    _handleLikeClick() {
      this._element.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    }
  
    _handleDeleteClick() {
      this._element.remove();
    }
  
  }