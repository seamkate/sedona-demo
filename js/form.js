let feedbackForm = document.querySelector('.feedback-form');

let popUpSuccess = document.querySelector('.popup--success');
let popUpFailure = document.querySelector('.popup--failure');
let popUpButtonSuccess = document.querySelector('.popup--success > .popup__button');
let popUpButtonFailure = document.querySelector('.popup--failure > .popup__button');


popUpButtonSuccess.addEventListener('click', function() {
  popUpSuccess.classList.remove('popup--opened');
});

popUpButtonFailure.addEventListener('click', function() {
  popUpFailure.classList.remove('popup--opened');
});


feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault()
  popUpSuccess.classList.add('popup--opened');
})
