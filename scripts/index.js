let page = document.querySelector('.page');
let profiletitle = page.querySelector('.profile__title');
let profilesubtitle = page.querySelector('.profile__subtitle');
let editButton = page.querySelector('.profile__edit-btn');
let closeButton = page.querySelector('.popup__close-btn');
submitButton = page.querySelector('.popup__submit-btn');
let popup = page.querySelector('.popup')
let userName = page.querySelector('.popup__input_name');
let userDescription = page.querySelector('.popup__input_description');

userName.value = profiletitle.textContent;
userDescription.value = profilesubtitle.textContent;

function openPopup() {
    popup.classList.add('popup__opened');
}

function editProfile(evt) {
    evt.preventDefault();
    profiletitle.textContent = userName.value;
    profilesubtitle.textContent = userDescription.value;
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup__opened');
    userName.value = profiletitle.textContent;
    userDescription.value = profilesubtitle.textContent;
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', editProfile);

