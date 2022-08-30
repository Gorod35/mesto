import {Card} from './card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
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

  const settings = { 
    formSelector: '.popup__form', 
    inputSelector: '.popup__input', 
    submitButtonSelector: '.popup__submit-btn', 
    inactiveButtonClass: 'popup__submit-btn_invalid', 
    inputErrorClass: 'popup__input_invalid', 
    errorClass: 'popup__input_form-error' 
  };

initialCards.forEach((item) => {
  renderCard(item);
});





const page = document.querySelector('.page');
const profiletitle = page.querySelector('.profile__title');
const profilesubtitle = page.querySelector('.profile__subtitle');
const buttonEditProfile = page.querySelector('.profile__edit-btn');
const buttonAddImage = page.querySelector('.profile__add-btn');


const popupEditProfile = page.querySelector('.popup_edit-profile') // объявляем попап-редактирования
const userName = popupEditProfile.querySelector('.popup__input_type_name'); // объявляем поле имя
const userDescription = popupEditProfile.querySelector('.popup__input_type_description'); // объявляем поле описание
const buttonEditProfileClose = popupEditProfile.querySelector('.popup__close-btn'); // объявляем кнопку закрыть


const popupAddCard = page.querySelector('.popup_add-card') // объявляем попап-редактирования




const buttonAddCardClose = popupAddCard.querySelector('.popup__close-btn'); // объявляем кнопку закрыть


const popups = document.querySelectorAll('.popup');

popups.forEach(item => {
  item.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__opened')) {
      closePopup(item); }
    else if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(item);  
      }
    })
    
})

function openPopup(popup) {
    popup.classList.add('popup__opened');
    document.addEventListener('keydown', closePopupEsc);
}

function handleOpenPopup(name, link) {
  document.querySelector('.popup_zoom-photo').querySelector('.popup__img').src = link;
  document.querySelector('.popup_zoom-photo').querySelector('.popup__imgcaption').textContent = name;
  document.querySelector('.popup_zoom-photo').querySelector('.popup__img').alt = name;
  openPopup(document.querySelector('.popup_zoom-photo'));
}

function closePopup(popup) {
  popup.classList.remove('popup__opened');
  document.removeEventListener('keydown', closePopupEsc);    
}

function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup__opened');
    closePopup(popupOpened);
  };
};



function editProfile(evt) {
    evt.preventDefault();
    profiletitle.textContent = userName.value;
    profilesubtitle.textContent = userDescription.value;
    closePopup(popupEditProfile);
}

const popupFormEditProfile = page.querySelector('.popup__form_edit-profile');

popupFormEditProfile.addEventListener('submit', editProfile);



const popupFormAddCard = page.querySelector('.popup__form_add-card');

const popupFormEditProfileValidation = new FormValidator(settings, popupFormEditProfile);

const popupFormAddCardValidation = new FormValidator(settings, popupFormAddCard);


buttonEditProfile.addEventListener('click', function(){
  userName.value = profiletitle.textContent;
  userDescription.value = profilesubtitle.textContent;
  popupFormEditProfileValidation.enableValidation();
  openPopup(popupEditProfile);
});





buttonAddImage.addEventListener('click', () => {
  popupFormAddCardValidation.enableValidation();
  openPopup(popupAddCard);
});

buttonAddCardClose.addEventListener('click', function() {
  popupAddCard.querySelector('.popup__input_type_name').value = '';
  popupAddCard.querySelector('.popup__input_type_link').value = '';
  closePopup(popupAddCard)
});


function renderCard(data) {
  const card = new Card(data, '#card', handleOpenPopup);
  const cardElement = card.generateCard();
  document.querySelector('.card__items').prepend(cardElement);
}

popupFormAddCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const cardData = {
      name: '',
      link: ''
    };
    cardData.name = popupAddCard.querySelector('.popup__input_type_name').value;
    cardData.link = popupAddCard.querySelector('.popup__input_type_link').value;
    renderCard(cardData);
    closePopup(popupAddCard);
    form.reset();
    popupFormAddCardValidation.disableSubmitButton();
});