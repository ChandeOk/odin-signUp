'use strict';
const pswInput = document.querySelector('.password');
const pswConfirmInput = document.querySelector('.password-confirm');
const error = document.createElement('p');
error.textContent = 'Doesnt match';
error.style.color = 'red';
error.classList.add('error');

pswConfirmInput.addEventListener('keyup', function (e) {
  if (pswInput.value === pswConfirmInput.value) {
    pswInput.classList.remove('no-match');
    pswConfirmInput.classList.remove('no-match');
    document.querySelector('.error').style.display = 'none';
  }
  if (pswInput.value !== pswConfirmInput.value) {
    console.log('DOESNT MATCH');
    pswInput.classList.add('no-match');
    pswConfirmInput.classList.add('no-match');
    pswConfirmInput.insertAdjacentElement('afterend', error);
    document.querySelector('.error').style.display = 'inline';
  }
});
