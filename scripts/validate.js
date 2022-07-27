
  const settings = { 
    formSelector: '.popup__form', 
    inputSelector: '.popup__input', 
    submitButtonSelector: '.popup__submit-btn', 
    inactiveButtonClass: 'popup__button_invalid', 
    inputErrorClass: 'popup__input_invalid', 
    errorClass: 'popup__input_form-error' 
  };




function handlerInputForm(evt) {
    const form = evt.currentTarget;
    validateForm(form);
    validateInput(evt.target);
    
}


function validateForm(form) {
    const submitButton = form.querySelector(settings.submitButtonSelector);
    if (form.checkValidity()) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove(settings.inactiveButtonClass);
    } else {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add(settings.inactiveButtonClass);
    }
}

function validateInput(input) {
    const errorElement = input.parentNode.querySelector(`.${input.name}-error`);
    errorElement.textContent = input.validationMessage;
    if (input.validationMessage !== '') {
        input.classList.add(settings.inputErrorClass);
    } else {
        input.classList.remove(settings.inputErrorClass);
    }
    }

    function enableValidation(settings) {
        const formList = Array.from(document.querySelectorAll(settings.formSelector));
        formList.forEach(formElement => {
            formElement.addEventListener('input', handlerInputForm);
        })
    }
    


  enableValidation(settings);