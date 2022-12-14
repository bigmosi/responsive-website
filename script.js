function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();

closeNav();

const form = document.querySelector('.main-form');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter email a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
  }
});