const passwordInput = document.getElementById('password');
const passwordChecker = document.getElementById('passwordChecker');
const poor = document.getElementById('poor');
const weak = document.getElementById('weak');
const strong = document.getElementById('strong');
const passwordInfo = document.getElementById('passwordInfo');

const poorRegExp = /[a-z]/;
const weakRegExp = /(?=.*?[0-9])/;
const strongRegExp = /(?=.*?[#?!@$%^&*_])/;
const whitespaceRegExp = /^$|\s+/;

passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value;
  const passwordLength = passwordValue.trim().length;

  const poorPassword = passwordValue.match(poorRegExp);
  const weakPassword = passwordValue.match(weakRegExp);
  const strongPassword = passwordValue.match(strongRegExp);

  const whitespace = passwordValue.match(whitespaceRegExp);

  function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
    if (passwordLength <= 3 && (poorPassword || weakPassword || strongPassword)) {
      poor.classList.add('active');
      passwordInfo.style.display = 'block';
      passwordInfo.style.color = 'red';
      poor.style.backgroundColor = 'red';
      passwordInfo.textContent = 'Your password is too Poor';
    } else {
      poor.classList.remove('active');
    }
  }

  function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
    if (passwordLength >= 4 && poorPassword && (weakPassword || strongPassword)) {
      weak.classList.add('active');
      passwordInfo.style.color = 'orange';
      weak.style.backgroundColor = 'orange';
      passwordInfo.textContent = 'Your password is weak';
    } else {
      weak.classList.remove('active');
    }
  }

  function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
    if (passwordLength >= 6 && poorPassword && weakPassword && strongPassword) {
      poor.classList.add('active');
      weak.classList.add('active');
      strong.classList.add('active');
      passwordInfo.style.color = 'green';
      strong.style.backgroundColor = 'green';
      passwordInfo.textContent = 'Your password is strong';
    } else {
      strong.classList.remove('active');
    }
  }

  if (passwordValue !== '') {
    passwordChecker.style.display = 'block';
    passwordChecker.style.display = 'flex';
    passwordInfo.style.display = 'block';
    passwordInfo.style.color = 'black';

    if (whitespace) {
      passwordInfo.textContent = 'Whitespaces are not allowed';
    } else {
      poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
      weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
      strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
    }
  } else {
    passwordChecker.style.display = 'none';
    passwordInfo.style.display = 'none';
  }
});

const showHideToggle = document.getElementById('showHideToggle');

showHideToggle.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showHideToggle.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    showHideToggle.textContent = 'Show';
  }
});

const showHideToggle2 = document.getElementById('showHideToggle2');
const passwordInput2 = document.getElementById('confirmPassword');

showHideToggle2.addEventListener('click', () => {
  if (passwordInput2.type === 'password') {
    passwordInput2.type = 'text';
    showHideToggle2.textContent = 'Hide';
  } else {
    passwordInput2.type = 'password';
    showHideToggle2.textContent = 'Show';
  }
});

const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMatchMessage = document.getElementById('passwordMatchMessage');
const signUpButton = document.getElementById('signUpBtn');

confirmPasswordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  if (confirmPasswordValue === '') {
    confirmPasswordInput.setCustomValidity('');
    passwordMatchMessage.textContent = '';
    submitButton.disabled = false;
  } else if (passwordValue === confirmPasswordValue) {
    confirmPasswordInput.setCustomValidity('');
    passwordMatchMessage.textContent = 'Passwords match!';
    passwordMatchMessage.style.color = 'green';
    submitButton.disabled = false;
  } else {
    confirmPasswordInput.setCustomValidity("Passwords don't match.");
    passwordMatchMessage.textContent = "Passwords don't match.";
    passwordMatchMessage.style.color = 'red';
    submitButton.disabled = true;
  }
});

