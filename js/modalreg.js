// Открыть модальное окно и выбрать начальный режим (регистрация или авторизация)
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // По умолчанию показываем форму регистрации
  toggleForm('registration');
}

// Закрыть модальное окно
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Переключение между регистрацией и авторизацией
function toggleForm(formType) {
  var registrationForm = document.getElementById("registrationForm");
  var loginForm = document.getElementById("loginForm");

  if (formType === 'registration') {
    registrationForm.style.display = "block";
    loginForm.style.display = "none";
  } else if (formType === 'login') {
    registrationForm.style.display = "none";
    loginForm.style.display = "block";
  }
}

// Переключение текста кнопки "Уже есть аккаунт?" и "Ещё нет аккаунта?"
function toggleModal(buttonText) {
  var registrationButton = document.querySelector(".aut-button");
  
  if (buttonText === 'Регистрация') {
    registrationButton.textContent = 'Авторизация';
  } else {
    registrationButton.textContent = 'Регистрация';
  }

  openModal();
}
