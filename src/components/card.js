export class Card {

    constructor(data, templateSelector, handleOpenPopup) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleOpenPopup = handleOpenPopup;
    }
  
    _getTemplate() {
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card__item').cloneNode(true);
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._cardImage = this._element.querySelector('.card__image');
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._element.querySelector('.card__title').textContent = this._name;
      this._setEventListeners();
      return this._element;
    }
  
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleOpenPopup(this._name, this._link);
      });

      this._likeButton = this._element.querySelector('.card__like-btn');
  
      this._likeButton.addEventListener('click', () => {
        this._handleLikeClick();
      });
  
      this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
        this._handleDeleteClick();
      })
    }
  
    _handleLikeClick() {
      this._likeButton.classList.toggle('card__like-btn_active');
    }
  
    _handleDeleteClick() {
      this._element.remove();
    }
  
  }