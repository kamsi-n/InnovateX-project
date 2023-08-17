const button = document.getElementById('navButton');
button.addEventListener('click', () => {
    const nav = document.getElementById('rightSide');
    nav.style.visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visible';
});

const title = localStorage.getItem('title');
const head = document.querySelector('h1');
head.innerHTML = title;

const desc = localStorage.getItem('desc');
const descE1 = document.querySelector('p');
descE1.innerHTML = desc;

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    window.location.href = '../html/home.html';
});

const next = document.getElementById('startQuiz');
next.addEventListener('click', () => {
    window.location.href = '../html/userQuestion.html';
});