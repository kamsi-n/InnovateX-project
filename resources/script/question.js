const button = document.getElementById('navButton');
button.addEventListener('click', () => {
  const nav = document.getElementById('rightSide');
  nav.style.visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visible';
});

let timeLeft = 15;

const timerInterval = setInterval(() => {
  const timerElement = document.getElementById('timer');

  timerElement.innerHTML = `${timeLeft}:00`;

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = '00:00';
  } else {
    timeLeft -= 1;
  }
}, 1000);

const publish = document.getElementById('publish');
const popup1 = document.getElementById('loading');
const overlay = document.getElementById('getCodeLink');

publish.addEventListener('click', () => {
  popup1.style.visibility = 'visible';
  overlay.style.visibility = 'hidden';
  setTimeout(() => {
    popup1.style.visibility = 'hidden';
    overlay.style.visibility = 'visible';
  }, 3000);
});

const close = document.getElementById('close');
const send = document.getElementById('send');
const sendOverlay = document.getElementById('sendOverlay');
close.addEventListener('click', () => {
  overlay.style.visibility = 'hidden';
});

send.addEventListener('click', () => {
  sendOverlay.style.visibility = 'visible';
});

const close2 = document.getElementById('close2');
const sendBtn = document.getElementById('sendBtn');

close2.addEventListener('click', () => {
  sendOverlay.style.visibility = 'hidden';
});

const alert = document.getElementById('sendAlert');
sendBtn.addEventListener('click', (event) => {
  event.preventDefault();

  alert.style.visibility = 'visible';

  setTimeout(() => {
    alert.style.visibility = 'hidden';
    window.location.href = '../html/dashboard.html';
  }, 2000);
});

publish.addEventListener('click', () => {
  fetch('http://102.36.176.228:4445/questions/add', {
    method: 'GET',
    body: JSON.stringify({
      question: questionE1,
      options: [option1, option2, option3],
      point: 10, // You have hardcoded the point value to 10 in the code
      answer: answerE1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
});