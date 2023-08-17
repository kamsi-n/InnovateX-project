const button = document.getElementById('navButton');
button.addEventListener('click', () => {
  const nav = document.getElementById('rightSide');
  nav.style.visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visible';
});

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = '../html/home.html';
});

let timeLeft = localStorage.getItem('timer');

const timerInterval = setInterval(() => {
  const timerElement = document.getElementById('timer');

  timerElement.innerHTML = `${timeLeft}:00`;

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = '00:00';
  } else {
    timeLeft -= 1;
  }
}, 1000);

// Retrieve the JWT token from local storage
const jwtToken = localStorage.getItem('jwtToken');

const content = document.querySelector('.content');
const url = 'http://102.36.176.228:4445/questions?page=0&size=10';
const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${jwtToken}`
  }
};
fetch(url, options)
  .then(response => response.json())
  .then(result => {

    console.log(result);
    for (let i = 0; i < result.data.content.length; i++) {
      const question = result.data.content[i].question;
      const index = result.data.content[i].options[i];
      const options = result.data.content[i].options;
      const answer = result.data.content[i].options[i].answer;
      console.log(answer);
      const text = `
      <div class="card">
            <div class="innerCard">
                <div class="top-row">
                    <div class="btn1">
                        <img src="../assets/material-symbols_dashboard-outline.png" alt="">
                        <p>Question List</p>
                    </div>
                    <div class="db-btn">
                        <img src="../assets/material-symbols_dashboard-outline.png" alt="">
                    </div>
                    <p id="timer">00:00</p>
                </div>

                <div class="questionCard">
                <div class="text">
                  <h1>${question}</h1>
                  <div class="one">
                    ${options.map((option) => {
        return `
                      <input type="radio" name="options" id=${index}>
                      <label id='labels' for="options">${option.value}</label>`
      })};
                      </div>
                  </div>
                  <div class="image"></div>
                </div>

                <div class="bottom-row">
                    <div class="point">
                        <p>Your Point: 30 0f 100</p>
                    </div>
                    <div class="q-number">
                        <p>Question 4 of 10</p>
                    </div>
                    <div class="submit">
                        <img src="../assets/home-icons/dashboard (2).png" alt="">
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
        <a href="../html/user-dashboard.html">
            <div class="closeBtn"></div>
        </a>
    </div>
      `
      content.innerHTML += text;

      const submitted = document.querySelector('.submit');
      submitted.addEventListener('click', () => {
        const avOp = document.getElementById('labels');
        if (answer === true) {
          avOp.style.border = '1px solid green';
        }
      });
    };

  })
  .catch(error => {
    console.log('Error', error);
  });