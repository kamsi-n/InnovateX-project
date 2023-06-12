document.getElementById('toggleBtn').addEventListener('click', () => {
  const navbarItems = document.getElementById('navbarItems');
  navbarItems.classList.toggle('show');
  navbarItems.classList.toggle('hide');
});

const svgFiles = [
  '/resources/assets/svg animated files/Property 1=Variant5.svg',
  '/resources/assets/svg animated files/Property 1=Variant2.svg',
  '/resources/assets/svg animated files/Property 1=Variant3.svg',
  '/resources/assets/svg animated files/Property 1=Variant4.svg',
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

const currentPageUrl = window.location.href;
const navLinks = document.querySelectorAll('#navbarItems ul li a');

navLinks.forEach((link) => {
  if (link.href === currentPageUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const logo = document.getElementById('.logo');
logo.addEventListener('click', () => {
  window.location.href = '/resources/html/home.html';
});
