const page = document.querySelector('.page');
export const buttonEditProfile = page.querySelector('.profile__edit-btn');
export const buttonAddImage = page.querySelector('.profile__add-btn');

const popupEditProfile = page.querySelector('.popup_edit-profile');
export const userName = popupEditProfile.querySelector('.popup__input_type_name');
export const userDescription = popupEditProfile.querySelector('.popup__input_type_description');
export const popupFormEditProfile = page.querySelector('.popup__form_edit-profile');
export const popupFormAddCard = page.querySelector('.popup__form_add-card');

export const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input_form-error'
  };

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];