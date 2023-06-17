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

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});
