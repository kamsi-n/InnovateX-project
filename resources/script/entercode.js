const start = document.getElementById('button');
const load = document.getElementById('loading');
const countdown = document.getElementById('countdown');
start.addEventListener('click', () => {
  load.style.visibility = 'visible';
  setTimeout(() => {
    countdown.style.visibility = 'visible';
  }, 2000);
  setTimeout(() => {
    window.location.href = '../html/userQuestion.html';
  }, 5000);
});

const display = document.querySelector('h2');
const displayText = ['Get Ready', '3', '2', '1'];
let currentIndex = 0;
setInterval(() => {
  display.innerHTML = displayText[currentIndex];
  currentIndex = (currentIndex + 1) % displayText.length;
}, 1000);

