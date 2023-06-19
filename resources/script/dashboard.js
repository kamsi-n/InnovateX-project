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

const currentPageUrl = '../html/dashboard.html';
const sbLinks = document.querySelectorAll('.db-sidebar ul li .dashboard');

sbLinks.forEach((link) => {
  if (currentPageUrl === '../html/dashboard.html') {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});

const svgFiles = ['../assets/svg animated files/Property 1=amico (1).svg',
  '../assets/svg animated files/Property 1=level 2.svg',
  '../assets/svg animated files/Property 1=Level 3.svg',
  '../assets/svg animated files/Property 1=Level 3.svg',
  '../assets/svg animated files/Property 1=Level 3.svg'];

const svgContainer = document.getElementById('animation');
let currentIndex = 0;

setInterval(() => {
  svgContainer.style.backgroundImage = `url('${svgFiles[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % svgFiles.length;
}, 1000);