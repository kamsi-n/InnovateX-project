const links = document.querySelectorAll('.db-sidebar a');
links.forEach((link) => {
  const icon = link.querySelector('img');
  const originalSrc = icon.src;
  const hoverSrc = icon.dataset.srcHover;
  link.addEventListener('mouseover', () => {
    icon.src = hoverSrc;
  });
  link.addEventListener('mouseout', () => {
    icon.src = originalSrc;
  });
});

const currentPageUrl = '../html/quizpage3.html';
const sbLinks = document.querySelectorAll('.db-sidebar ul li .myQuizzes');

sbLinks.forEach((link) => {
  if (currentPageUrl === '../html/quizpage3.html') {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});

const button = document.getElementById('navButton');
button.addEventListener('click', () => {
  const nav = document.getElementById('rightSide');
  nav.style.visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visible';
});

const toggle = document.getElementById('toggleArrow');
toggle.addEventListener('click', () => {
  const sidebar = document.querySelector('.db-sidebar');
  sidebar.style.visibility = sidebar.style.visibility === 'visible' ? 'hidden' : 'visible';
  if (sidebar.style.visibility === 'hidden') {
    toggle.style.left = '0';
  } else {
    toggle.style.left = '21%';
  }
});

const enterCode = document.getElementById('enterCode');
enterCode.addEventListener('click', () => {
  window.location.href = '../html/entercode.html';
});

const createquiz = document.getElementById('createQuiz');
createquiz.addEventListener('click', () => {
  window.location.href = '../html/dashboard.html';
});

const preview = document.querySelector('.button1');
preview.addEventListener('click', () => {
  window.location.href = '../html/question.html';
});

const back = document.querySelector('.back');
back.addEventListener('click', () => {
  window.location.href = '../html/quizpage2.html';
});

const add = document.querySelector('.add');
/*
add.addEventListener('click', () => {
  const inputFields = document.querySelectorAll('input');

  // Loop through each input field and clear its value
  inputFields.forEach((inputField) => {
    inputField.value = '';
  });
}); */
/*
const jwtToken = localStorage.getItem('jwtToken');

add.addEventListener('click', () => {

  const questionE1 = document.getElementById('question').value;
  const option1 = document.getElementById('option1').value;
  const option2 = document.getElementById('option2').value;
  const option3 = document.getElementById('option3').value;
  const answerE1 = document.getElementById('answer').value;

  fetch('http://102.36.176.228:4445/questions/add', {
    method: 'POST',
    body: JSON.stringify({
      question: questionE1,
      options: [option1, option2, option3],
      point: 10, // You have hardcoded the point value to 10 in the code
      answer: answerE1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'Bearer' + jwtToken,
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
});*/

const jwtToken = localStorage.getItem('jwtToken');
const form = document.getElementById('form');
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const questionE1 = document.getElementById('question').value;
  const option1 = document.getElementById('option1').value;
  const option2 = document.getElementById('option2').value;
  const option3 = document.getElementById('option3').value;
  const answerE1 = document.getElementById('answer').value;
  const point = document.getElementById('point').value;
  const data = {
    question: questionE1,
    options: [option1, option2, option3],
    point: point, // You have hardcoded the point value to 10 in the code
    answer: answerE1
  };
  const jsonData = JSON.stringify(data);
  console.log(data);

  fetch("http://102.36.176.228:4445/questions/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: 'Bearer ' + jwtToken,
    },
    body: jsonData,
  })
    .then((response) => response.jsonData())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};
