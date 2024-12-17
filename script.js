'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('signInBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const form = document.getElementById('registrationForm');
  const inputs = document.querySelectorAll('#registrationForm input');

  function areFieldsFilled() {
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add('error');
        allFilled = false;
      } else {
        input.classList.remove('error');
      }
    });
    return allFilled;
  }

  signInBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (areFieldsFilled()) {
      document.querySelector('.allForm').style.display = 'none';
      alert('Регистрация прошла успешно!');
    } else {
      alert('Заполните все поля, пожалуйста.');
    }
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const allFormContainer = document.querySelector('.allForm');
    allFormContainer.style.display = 'none';
    alert('Регистрация отменена');
  });
});
