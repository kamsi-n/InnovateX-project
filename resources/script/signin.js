const signupButton = document.querySelector('.signUpBtn');
signupButton.addEventListener('click', () => {
  window.location.href = 'https://kamsi-n.github.io/InnovateX-project/index.html';
});

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});

const showHideToggle = document.getElementById('showHideToggle');
const passwordInput = document.getElementById('password');

showHideToggle.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showHideToggle.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    showHideToggle.textContent = 'Show';
  }
});

form.addEventListener('submit', () => {

  const emailE1 = document.getElementById('signInEmail').value;
  const passwordE1 = document.getElementById('password').value;

  // Make the fetch request
  fetch('http://102.36.176.228:4445/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailE1,
      password: passwordE1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(function (response) {
    return response.json();
  })
    .then(result => {
      // const jwtToken = result.data; // Assuming the server returns the token in the "token" property
      // Use the JWT token to access restricted endpoints by including it in the "Authorization" header of subsequent requests
      // After obtaining the JWT token

      if (result.status === 0) {
        localStorage.setItem('jwtToken', result.data);
        window.location.href = '../html/home.html';
        document.getElementById('errorMsg').textContent = '';
      } else {
        document.getElementById('errorMsg').textContent = 'Invalid email or password';
      };
    })
    .catch(error => {
      document.getElementById('errorMsg').textContent = 'Invalid email or password';
      console.log(error);
    })
});
