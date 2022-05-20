'use strict';

const inputInForm = document.querySelector('#validation-input');
console.log(inputInForm);
const inputChecker = Number(inputInForm.dataset.length);
console.log(inputChecker);

inputInForm.addEventListener('blur', () => {
  if (inputInForm.value.length === inputChecker) {
    inputInForm.classList.remove('invalid');
    inputInForm.classList.add('valid');
  } else {
    inputInForm.classList.remove('valid');
    inputInForm.classList.add('invalid');
  }
});