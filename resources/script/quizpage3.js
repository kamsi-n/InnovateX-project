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

const currentPageUrl = '../html/quizpage3.html';
const sbLinks = document.querySelectorAll('.db-sidebar ul li .myQuizzes');

sbLinks.forEach((link) => {
  if (currentPageUrl === '../html/quizpage3.html') {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});

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

const publishbtn = document.querySelector('.buttons');
publishbtn.addEventListener('click', () => {
  window.location.href = '../html/question.html';
});