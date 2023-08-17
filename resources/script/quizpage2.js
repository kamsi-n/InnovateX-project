const back = document.querySelector('.qpage-btn1');
back.addEventListener('click', () => {
  window.location.href = '../html/dashboard2.html';
});

const next = document.querySelector('.qpage-btn');
next.addEventListener('click', () => {
  const timer = document.getElementById('quizTime').value;
  localStorage.setItem('timer', timer);

  const quizTitle = document.getElementById('quizTitle').value;
  localStorage.setItem('title', quizTitle);

  const quizDesc = document.getElementById('quizDesc').value;
  localStorage.setItem('desc', quizDesc);
  window.location.href = '../html/quizpage3.html';
});

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



/*
next.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the values of the input fields
  const title = document.getElementById('quizTitle').value;
  const desc = document.getElementById('quizDesc').value;
  const time = document.getElementById('quizTime').value;

  // Test to ensure data is captured
  let data = {
    title,
    desc,
    time,
  };
  console.log(data);
 
    // Make the fetch request
    fetch('http://102.36.176.228:4445/questions/add', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc,
        time,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error('Error:', error)); 
});
*/
