document.getElementById('toggleBtn').addEventListener('click', () => {
  const navbarItems = document.getElementById('navbarItems');
  navbarItems.classList.toggle('show');
  navbarItems.classList.toggle('hide');
});

const svgFiles = [
  '../assets/svg animated files/Property 1=Variant5.svg',
  '../assets/svg animated files/Property 1=Variant2.svg',
  '../assets/svg animated files/Property 1=Variant3.svg',
  '../assets/svg animated files/Property 1=Variant4.svg',
];

const svgContainer = document.getElementById('svg-container');
let currentIndexSvg = 0;

setInterval(() => {
  svgContainer.style.backgroundImage = `url('${svgFiles[currentIndexSvg]}')`;
  currentIndexSvg = (currentIndexSvg + 1) % svgFiles.length;
}, 1000);

const spanElement = document.getElementById('wordChange');
const texts = ['create', 'send', 'answer'];
const colors = ['#FF5400', '#7209B7', '#FF0054'];
let currentIndex = 0;

setInterval(() => {
  spanElement.textContent = texts[currentIndex];
  spanElement.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}, 1500);

const logo = document.getElementById('.logo');
logo.addEventListener('click', () => {
  window.location.href = 'resources/html/home.html';
});

const questions = document.querySelectorAll('.faq-section h5.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    console.log('clicked');
    // Toggle the active class on the clicked question
    question.classList.toggle('active');
    // Get the next sibling element (answer)
    const answer = question.nextElementSibling;
    // Toggle the answer's visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
    // Toggle the clicked class on the question
    question.classList.toggle('clicked');
  });
});

let btn = document.getElementById('testbtn');
btn.addEventListener('click', () => {
  console.log('clicked');
});