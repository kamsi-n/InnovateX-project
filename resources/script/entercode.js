const start = document.getElementById('button');
const load = document.getElementById('loading');
start.addEventListener('click', () => {
  load.style.visibility = 'visible';
});

window.addEventListener('load', () => {
  setTimeout(() => {
    load.style.display = 'none';
  }, 6000);
});

const display = document.querySelector('h2');
const displayText = ['Get Ready', '3', '2', '1'];
let currentIndex = 0;
setInterval(() => {
  display.innerHTML = displayText[currentIndex];
  currentIndex = (currentIndex + 1) % displayText.length;
}, 1000);

window.addEventListener('load', () => {
  setTimeout(() => {
    window.location.href = '../html/question.html';
  }, 4000);
});