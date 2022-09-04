import './styles/index.css';
import { Card } from './components/card.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';


// Объявляем константы
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

const page = document.querySelector('.page'); // объявляем страницу page
const buttonEditProfile = page.querySelector('.profile__edit-btn'); // объявляем кнопку редактирования профиля
const buttonAddImage = page.querySelector('.profile__add-btn'); // объявляем кнопку добавления картинки

const popupEditProfile = page.querySelector('.popup_edit-profile') // объявляем попап-редактирования профиля
const userName = popupEditProfile.querySelector('.popup__input_type_name'); // объявляем поле имя
const userDescription = popupEditProfile.querySelector('.popup__input_type_description'); // объявляем поле описание


const popupAddCard = page.querySelector('.popup_add-card') // объявляем попап-редактирования



function renderCard(data) { // функция отрисовки карточки. Создаёт новый класс карточки, генерирует элемент карточки, и вставляет первым в кард итемс
  const card = new Card(data, '#card', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleOpenPopup(name, link) { // обработчик открытия для зум попапа, меняет картинку в зум попапе на нужную и открывает его
  const popupWithImage = new PopupWithImage('.popup_zoom-photo', name, link);
  popupWithImage.open();
  popupWithImage.setEventListeners();
}

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(renderCard(data));
  }
}, '.card__items');

cardList.renderItems();


const userInfo = new UserInfo('.profile__title', '.profile__subtitle');



const popupFormEditProfile = page.querySelector('.popup__form_edit-profile'); // ищет попап редактирования профиля

const popupFormEditProfileValidation = new FormValidator(settings, popupFormEditProfile); // создаём класс валидации для попапа редактирования профиля

const editProfile = new PopupWithForm('.popup_edit-profile', {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data.username, data.description);
  }
})

editProfile.setEventListeners();

buttonEditProfile.addEventListener('click', function () { // слушатель по клику редактирования профиля на главной странице
  popupFormEditProfileValidation.enableValidation();
  userName.value = userInfo.getUserInfo().name;
  userDescription.value = userInfo.getUserInfo().description;
  editProfile.open();
});

const popupFormAddCard = page.querySelector('.popup__form_add-card'); // ищет попап добавления карточки профиля
const popupFormAddCardValidation = new FormValidator(settings, popupFormAddCard); // создаём класс валидации для попапа добавления карточки

const addCard = new PopupWithForm('.popup_add-card', {
  handleFormSubmit: (data) => {
    cardList.addItem(renderCard(data));
    popupFormAddCardValidation.disableSubmitButton();
  }
});

addCard.setEventListeners();

buttonAddImage.addEventListener('click', () => { // слушатель по клику добавления карточки
  popupFormAddCardValidation.enableValidation(); // включает валидацию формы добавления карточки
  addCard.open();
});





















