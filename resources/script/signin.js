const signupButton = document.querySelector('.signUpBtn');
signupButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});

const svgFiles = [
  '../assets/svg animated files/Property 1=Variant5.svg',
  '../assets/svg animated files/Property 1=Variant2.svg',
  '../assets/svg animated files/Property 1=Variant3.svg',
  '../assets/svg animated files/Property 1=Variant4.svg',
];

const svgContainer = document.getElementById('animation1');
let currentIndex = 0;

setInterval(() => {
  svgContainer.style.backgroundImage = `url('${svgFiles[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % svgFiles.length;
}, 1000);

const svgFiles2 = [
  '../assets/svg animated files/Property 1=amico (1).svg',
  '../assets/svg animated files/Property 1=level 2.svg',
  '../assets/svg animated files/Property 1=Level 3.svg',
  '../assets/svg animated files/Property 1=Level 3.svg',
  '../assets/svg animated files/Property 1=Level 3.svg',
];

const svgContainer2 = document.getElementById('animation2');
let currentIndex2 = 0;

setInterval(() => {
  svgContainer2.style.backgroundImage = `url('${svgFiles2[currentIndex2]}')`;
  currentIndex2 = (currentIndex2 + 1) % svgFiles2.length;
}, 1000);
