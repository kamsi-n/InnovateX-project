function animateImages() {
  const images = document.querySelectorAll('.animation-item');

  // Loop through each image
  images.forEach((image, index) => {
    // Set a delay for each image to start animating
    setTimeout(() => {
      image.style.opacity = 1; // Set opacity to 1 to fade in the image
    }, 1000 * index); // Delay each image by 1 second
  });
}

// Call the animateImages function repeatedly
setInterval(animateImages, 1000);

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

const logout = document.getElementById('logoutBtn');
logout.addEventListener('click', () => {
  window.location.href = '../html/signin.html';
});

const cards = document.querySelector('.grid-item');
cards.addEventListener('click', () => {
  window.location.href = '../html/dashboard.html';
});