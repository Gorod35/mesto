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

const page = document.querySelector('.page');
const profiletitle = page.querySelector('.profile__title');
const profilesubtitle = page.querySelector('.profile__subtitle');
const buttonEditProfile = page.querySelector('.profile__edit-btn');
const buttonAddImage = page.querySelector('.profile__add-btn');

const zoomPopup = page.querySelector('.popup_zoom-photo');
zoomPopup.querySelector('.popup__close-btn').addEventListener('click', function() {
  closePopup(zoomPopup);
})

const cardTemplate = document.querySelector('#card').content;
const cardsPlace = document.querySelector('.card__items');



  function addCard(name, link) {
    const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    const zoomPopupImage = zoomPopup.querySelector('.popup__img');
    const zoomPopupImgCaption = zoomPopup.querySelector('.popup__imgcaption');


    cardImage.addEventListener('click', function(){
      
      zoomPopupImage.src = link;
      zoomPopupImgCaption.textContent = name;
      zoomPopupImage.alt = name;

      openPopup(zoomPopup);
    })

    const cardLikeButton = cardElement.querySelector('.card__like-btn');
    cardLikeButton.addEventListener('click', function(){
      cardLikeButton.classList.toggle('card__like-btn_active');
    })

    cardElement.querySelector('.card__delete-btn').addEventListener('click', function() {
      cardElement.remove();
  });
    return cardElement;
}

function renderCard(name, link) {
  const cardElement = addCard(name, link);
  cardsPlace.prepend(cardElement);
};


for (let i = 0; i < initialCards.length; i++) {
  renderCard(initialCards[i].name, initialCards[i].link);
}




const popupEditProfile = page.querySelector('.popup_edit-profile') // объявляем попап-редактирования
const userName = popupEditProfile.querySelector('.popup__input_type_name'); // объявляем поле имя
const userDescription = popupEditProfile.querySelector('.popup__input_type_description'); // объявляем поле описание
const buttonEditProfileSubmit = popupEditProfile.querySelector('.popup__submit-btn'); // объявляем кнопку отправить
const buttonEditProfileClose = popupEditProfile.querySelector('.popup__close-btn'); // объявляем кнопку закрыть


const popupAddCard = page.querySelector('.popup_add-card') // объявляем попап-редактирования
const placeName = popupAddCard.querySelector('.popup__input_type_name'); // объявляем поле имя
const imageLink = popupAddCard.querySelector('.popup__input_type_link'); // объявляем поле описание
const buttonAddCardSubmit = popupAddCard.querySelector('.popup__submit-btn'); // объявляем кнопку отправить
const buttonAddCardClose = popupAddCard.querySelector('.popup__close-btn'); // объявляем кнопку закрыть




function openPopup(popup) {
    popup.classList.add('popup__opened');
}

function editProfile(evt) {
    evt.preventDefault();
    profiletitle.textContent = userName.value;
    profilesubtitle.textContent = userDescription.value;
    closePopup(popupEditProfile);
}

function closePopup(popup) {
    popup.classList.remove('popup__opened');
}




buttonEditProfile.addEventListener('click', function(){
  userName.value = profiletitle.textContent;
  userDescription.value = profilesubtitle.textContent;
  openPopup(popupEditProfile);
})



buttonEditProfileClose.addEventListener('click', function() {
  closePopup(popupEditProfile);
})

const popupFormEditProfile = page.querySelector('.popup__form_edit-profile');

popupFormEditProfile.addEventListener('submit', editProfile);



const popupFormAddCard = page.querySelector('.popup__form_add-card');

buttonAddImage.addEventListener('click', () => openPopup(popupAddCard));
buttonAddCardClose.addEventListener('click', function() {
  placeName.value = '';
  imageLink.value = '';
  closePopup(popupAddCard)
});
popupFormAddCard.addEventListener('submit', function(evt) {
  console.log(evt);
    evt.preventDefault();
    renderCard(placeName.value, imageLink.value);
    closePopup(popupAddCard);
    placeName.value = '';
    imageLink.value = '';
});