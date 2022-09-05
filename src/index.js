import './styles/index.css';
import { Card } from './components/card.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';
import {
  buttonEditProfile,
  buttonAddImage,
  userName,
  userDescription,
  popupFormEditProfile,
  popupFormAddCard,
  settings,
  initialCards
} from './utils/constants.js';


function renderCard(data) { // функция отрисовки карточки. Создаёт новый класс карточки, генерирует элемент карточки, и вставляет первым в кард итемс
  const card = new Card(data, '#card', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage('.popup_zoom-photo');
popupWithImage.setEventListeners();

function handleOpenPopup(name, link) { // обработчик открытия для зум попапа, меняет картинку в зум попапе на нужную и открывает его
  popupWithImage.open(name, link);
}

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(renderCard(data));
  }
}, '.card__items');

cardList.renderItems();


const userInfo = new UserInfo('.profile__title', '.profile__subtitle');





const popupFormEditProfileValidation = new FormValidator(settings, popupFormEditProfile); // создаём класс валидации для попапа редактирования профиля
popupFormEditProfileValidation.enableValidation();

const editProfile = new PopupWithForm('.popup_edit-profile', {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data.username, data.description);
  }
})

editProfile.setEventListeners();

buttonEditProfile.addEventListener('click', function () { // слушатель по клику редактирования профиля на главной странице
  userName.value = userInfo.getUserInfo().name;
  userDescription.value = userInfo.getUserInfo().description;
  editProfile.open();
});


const popupFormAddCardValidation = new FormValidator(settings, popupFormAddCard); // создаём класс валидации для попапа добавления карточки
popupFormAddCardValidation.enableValidation(); // включает валидацию формы добавления карточки

const addCard = new PopupWithForm('.popup_add-card', {
  handleFormSubmit: (data) => {
    cardList.addItem(renderCard(data));
    popupFormAddCardValidation.disableSubmitButton();
  }
});

addCard.setEventListeners();

buttonAddImage.addEventListener('click', () => { // слушатель по клику добавления карточки
  addCard.open();
});





















