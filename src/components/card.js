export class Card {

    constructor(data, templateSelector, handleOpenPopup, handleDeleteClick, handleLikeClick, currentId) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleOpenPopup = handleOpenPopup;
      this._handleDeleteClick = handleDeleteClick;
      this._handleLikeClick = handleLikeClick;
      this._likes = data.likes.length;
      this._likesArray = data.likes;
      this._ownerId = data.owner._id;
      this._currentId = currentId;
      this._cardId = data._id;
    }

    _getVisible() {
      if (!(this._ownerId === this._currentId)) {
        this._element.querySelector('.card__delete-btn').classList.add('card__delete-btn_invisible');
      }
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
      this._element.querySelector('.card__counter').textContent = this._likes;
      this._setEventListeners();
      this._getVisible();
      this._cardisLiked();
      return this._element;
    }

    _cardisLiked() {
      this._likesArray.forEach(element => {
        if (element._id === this._currentId) {
          this._likeButton.classList.add('card__like-btn_active');
        }
      })
    }
  
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleOpenPopup(this._name, this._link);
      });

      this._likeButton = this._element.querySelector('.card__like-btn');
  
      this._likeButton.addEventListener('click', () => {
        this._handleLikeClick(this._cardId);
        console.log(this._isLiked());
      });
  
      this._element.querySelector('.card__delete-btn').addEventListener('click', () => {
        this._handleDeleteClick(this._element, this._cardId);
      })
    }


    _isLiked() {
      return (this._likeButton.classList.contains('card__like-btn_active'));
    }
  
    // _handleLikeClick() {
    //   this._likeButton.classList.toggle('card__like-btn_active');
    // }
  
  }