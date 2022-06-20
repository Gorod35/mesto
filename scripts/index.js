let page = document.querySelector('.page');
let profiletitle = page.querySelector('.profile__title');
let profilesubtitle = page.querySelector('.profile__subtitle');
let editButton = page.querySelector('.profile__edit-btn');
let closeButton = page.querySelector('.popup__close-btn');
submitButton = page.querySelector('.popup__submit-btn');
let popup = page.querySelector('.popup')
let userName = page.querySelector('.popup__input-name');
let userDescription = page.querySelector('.popap__input-description');

// resetButton.classList.add('form__submit-btn_disabled'); добавить класс к классу
// resetButton.classList.remove('form__submit-btn_disabled'); добавить класс к классу
// songsContainer.innerHTML = `` Добавляет внутрь html-код и перезаписывает его
// songsContainer.innerHTML += `` Добавляет внутрь html-код вконце предыдущего кода
// addButton.addEventListener('click', addSong); По клику запускает функцию addSong
// songsContainer.insertAdjacentHTML('beforeend', 'HTML-код') Добавляет внутрь html-код вконце предыдущего кода

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

