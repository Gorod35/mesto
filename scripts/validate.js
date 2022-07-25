const formAddCard = document.querySelector('.popup__form_add-card');


function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(formElement => {
        formElement.addEventListener('input', handlerInputForm);
    })
}

enableValidation();

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
    if (input.validationMessage !== '') {
        input.classList.add('popup__input_invalid');
    } else {
        input.classList.remove('popup__input_invalid');
    }
    }
