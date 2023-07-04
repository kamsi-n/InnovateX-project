const button = document.getElementById('navButton');
button.addEventListener('click', () => {
  const nav = document.getElementById('rightSide');
  nav.style.visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visible';
});

let timeLeft = 15;

const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const timerElement = document.getElementById('timer');

  timerElement.innerHTML = `${timeLeft}:00`;

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = '00:00';
  } else {
    timeLeft--;
  }
}
