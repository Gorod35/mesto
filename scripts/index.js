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
const editButton = page.querySelector('.profile__edit-btn');
const addButton = page.querySelector('.profile__add-btn');

const zoomPopup = page.querySelector('.popup__zoom-photo');

const cardTemplate = document.querySelector('#card').content;
const cardsPlace = document.querySelector('.card__items');



  function addCard(name, link) {
    const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = name;

    
    cardElement.querySelector('.card__image').addEventListener('click', function(){
      zoomPopup.querySelector('.popup__img').src = link;
      zoomPopup.querySelector('.popup__imgcaption').textContent = name;
      zoomPopup.querySelector('.popup__img').alt = name;

      openPopup(zoomPopup);
      zoomPopup.querySelector('.popup__close-btn').addEventListener('click', function() {
        closePopup(zoomPopup);
      })
    })

    cardElement.querySelector('.card__like-btn').addEventListener('click', function(){
      cardElement.querySelector('.card__like-btn').classList.toggle('card__like-btn_active');
    })

    cardElement.querySelector('.card__delete-btn').addEventListener('click', function() {
      const listItem = cardElement.querySelector('.card__delete-btn').closest('.card__item');
      listItem.remove();
  });
    
    
    cardsPlace.prepend(cardElement);
}



for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link);
}




const editProfilePopup = page.querySelector('.popup__edit-profile') // объявляем попап-редактирования
const userName = editProfilePopup.querySelector('.popup__input_type_name'); // объявляем поле имя
const userDescription = editProfilePopup.querySelector('.popup__input_type_description'); // объявляем поле описание
const editProfilesubmitButton = editProfilePopup.querySelector('.popup__submit-btn'); // объявляем кнопку отправить
const editProfilecloseButton = editProfilePopup.querySelector('.popup__close-btn'); // объявляем кнопку закрыть


const addCardPopup = page.querySelector('.popup__add-card') // объявляем попап-редактирования
const placeName = addCardPopup.querySelector('.popup__input_type_name'); // объявляем поле имя
const imageLink = addCardPopup.querySelector('.popup__input_type_link'); // объявляем поле описание
const addCardsubmitButton = addCardPopup.querySelector('.popup__submit-btn'); // объявляем кнопку отправить
const addCardcloseButton = addCardPopup.querySelector('.popup__close-btn'); // объявляем кнопку закрыть




userName.value = profiletitle.textContent;
userDescription.value = profilesubtitle.textContent;

function openPopup(popup) {
    popup.classList.add('popup__opened');
}

function editProfile(evt) {
    evt.preventDefault();
    profiletitle.textContent = userName.value;
    profilesubtitle.textContent = userDescription.value;
    closePopup(editProfilePopup);
}

function closePopup(popup) {
    popup.classList.remove('popup__opened');
    userName.value = profiletitle.textContent;
    userDescription.value = profilesubtitle.textContent;
}




editButton.addEventListener('click', () => openPopup(editProfilePopup));
editProfilecloseButton.addEventListener('click', () => closePopup(editProfilePopup));
editProfilesubmitButton.addEventListener('click', editProfile);


addButton.addEventListener('click', () => openPopup(addCardPopup));
addCardcloseButton.addEventListener('click', () => closePopup(addCardPopup));
addCardsubmitButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    addCard(placeName.value, imageLink.value);
    closePopup(addCardPopup);
    placeName.value = '';
    imageLink.value = '';
});