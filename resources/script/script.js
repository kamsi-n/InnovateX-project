const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = './resources/html/home.html';
});

const signInButton = document.querySelector('.signInBtn');
signInButton.addEventListener('click', () => {
  window.location.href = './resources/html/signin.html';
});
/*
form.addEventListener('submit', () => {

  // Get the values of the input fields
  const usernameE1 = document.getElementById('signUpUsername').value;
  const emailE1 = document.getElementById('signUpEmail').value;
  const passwordE1 = document.getElementById('password').value;
  const confirmPasswordE1 = document.getElementById('confirmPassword').value;

  // Make the fetch request
  fetch('http://102.36.176.228:4445/auth/admin', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameE1,
      email: emailE1,
      password: passwordE1,
      confirmPassword: confirmPasswordE1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
  localStorage.setItem('name', usernameE1);
  window.location.href = "../html/signin.html";
});
*/
