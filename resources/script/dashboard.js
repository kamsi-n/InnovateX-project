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

const start = document.querySelector('.one');
start.addEventListener('click', () => {
  window.location.href = '../html/dashboard2.html';
});

const logout = document.getElementById('logoutBtn');
logout.addEventListener('click', () => {
  window.location.href = '../html/signin.html';
});

const usernameE2 = localStorage.getItem('userName');
const nameE2 = document.querySelector('span');
nameE2.innerHTML = usernameE2;
