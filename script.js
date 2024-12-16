document.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы формы и кнопки
  const form = document.querySelector('form');
  const signInButton = document.querySelector('.btns .btn:first-child'); // Кнопка "Sign in"
  const cancelButton = document.querySelector('.btns .btn:last-child'); // Кнопка "Cancel"

  // Обработчик для кнопки "Sign in"
  signInButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки

    // Получаем значения полей
    const nickname = form.querySelector('input[type="text"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();

    // Проверяем, заполнены ли поля
    if (nickname && password && email && phone) {
      alert('Вы зарегистрировались');
    } else {
      alert('Пожалуйста, заполните все поля формы.');
    }
  });

  // Обработчик для кнопки "Cancel"
  cancelButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки
    alert('Вы не зарегистрировались');
  });
});
