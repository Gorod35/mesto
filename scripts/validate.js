const formAddCard = document.querySelector('.popup__form_add-card');
const formEditProfile = document.querySelector('.popup__form_edit-profile');

formAddCard.addEventListener('input', handlerInputForm);
formEditProfile.addEventListener('input', handlerInputForm);

validateForm(formAddCard);


function handlerInputForm(evt) {
    const form = evt.currentTarget;
    validateForm(form);
    validateInput(evt.target);
    
}

function validateForm(form) {
    const submitButton = form.querySelector('.popup__submit-btn');
    if (form.checkValidity()) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('popup__button_invalid');
    } else {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add('popup__button_invalid');
    }
}

function validateInput(input) {
    const errorElement = input.parentNode.querySelector(`.${input.name}-error`);
    errorElement.textContent = input.validationMessage;
}
