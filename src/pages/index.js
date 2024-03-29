import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js'
import {
  buttonEditProfile,
  buttonAddImage,
  buttonChangeAvatar,
  profileNameSelector,
  profileDescriptionSelector,
  profileAvatarSelector,
  userName,
  userDescription,
  popupFormEditProfile,
  popupFormAddCard,
  popupFormChangeAvatar,
  settings,
} from '../utils/constants.js';

let currentId = '';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49/', 
  headers: {  
    authorization: '15db24d7-fbd4-4557-a75b-6ba2280bfc57',
    'Content-Type': 'application/json'
    }
});


function renderCard(data) { // функция отрисовки карточки. Создаёт новый класс карточки, генерирует элемент карточки, и вставляет первым в кард итемс
  const card = new Card(data, '#card', handleOpenPopup, () => handleDeleteClick(card), () => handleLikeClick(card), currentId);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleDeleteClick(card) {
  confirmDelete.open(card);
  confirmDelete.handlerFormSubmit((cardId) => {
    api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен');
  })
  })
}

function handleLikeClick(card) {
  if (!card.isLiked()) {
    api.likeCard(card._data._id)
    .then((res) => {
      card.setLike(res);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен');
  })
  }

  else if (card.isLiked()) {
    api.dislikeCard(card._data._id)
    .then((res) => {
      card.setLike(res);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен');
  })
  }
}

const cardList = new Section({
  renderer: (data) => {
    cardList.addItem(renderCard(data));
  }
}, '.card__items');

Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([cards, userData]) => {
  currentId = userData._id;

  cardList.renderItems(cards.reverse());
  userInfo.setUserInfo(userData);
})
.catch((err) => {
  console.log('Ошибка. Запрос не выполнен');
})


const addCard = new PopupWithForm('.popup_add-card', {
  handleFormSubmit: (data) => {
    addCard.renderLoading(true);
    api.addCard(data)
    .then((res) => {
      cardList.addItem(renderCard(res));
      addCard.close();
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен');
  })
    .finally(() => {
      addCard.renderLoading(false);
    })
  }
});

addCard.setEventListeners();






const popupWithImage = new PopupWithImage('.popup_zoom-photo');
popupWithImage.setEventListeners();

const confirmDelete = new PopupWithConfirm('.popup_confirm');
confirmDelete.setEventListeners();




function handleOpenPopup(name, link) { // обработчик открытия для зум попапа, меняет картинку в зум попапе на нужную и открывает его
  popupWithImage.open(name, link);
}









const userInfo = new UserInfo({
  userNameSelector: profileNameSelector,
  userDescriptionSelector: profileDescriptionSelector,
  userAvatarSelector: profileAvatarSelector
});


const changeAvatar = new PopupWithForm('.popup_refresh-avatar', {
  handleFormSubmit: (data) =>  {
    changeAvatar.renderLoading(true);
    api.setAvatar(data.link)
    .then((res) => {
      userInfo.setUserInfo(res);
      changeAvatar.close();
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен');
  })
    .finally(() => {
      changeAvatar.renderLoading(false);
    })
  }
})

changeAvatar.setEventListeners();

const popupFormChangeAvatarValidation = new FormValidator(settings, popupFormChangeAvatar);
popupFormChangeAvatarValidation.enableValidation();




buttonChangeAvatar.addEventListener('click', () => {
  changeAvatar.open();
  popupFormChangeAvatarValidation.disableSubmitButton();
});


const popupFormEditProfileValidation = new FormValidator(settings, popupFormEditProfile); // создаём класс валидации для попапа редактирования профиля
popupFormEditProfileValidation.enableValidation();

const editProfile = new PopupWithForm('.popup_edit-profile', {
  handleFormSubmit: (data) => {
    editProfile.renderLoading(true);
    api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      editProfile.close();
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
    })
    .finally(() => {
      editProfile.renderLoading(false);
    })
    
    
  }
})



editProfile.setEventListeners();

buttonEditProfile.addEventListener('click', function () { // слушатель по клику редактирования профиля на главной странице
  const user = userInfo.getUserInfo();
  userName.value = user.name;
  userDescription.value = user.description;
  editProfile.open();
});


const popupFormAddCardValidation = new FormValidator(settings, popupFormAddCard); // создаём класс валидации для попапа добавления карточки
popupFormAddCardValidation.enableValidation(); // включает валидацию формы добавления карточки



buttonAddImage.addEventListener('click', () => { // слушатель по клику добавления карточки
  addCard.open();
  popupFormAddCardValidation.disableSubmitButton();
});
























