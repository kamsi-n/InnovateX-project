let parameters = {
    count: false,
    letters: false,
    numbers: false,
    special: false,
  };
  
  let passwordChecker = document.getElementById("passwordChecker");
  let one = document.getElementById("one");
  let btn = document.querySelector("signUpBtn")

  function testing() {
    one.innerHTML.style.background = 'blue';
  }

  btn.addEventListener('click' , testing);


  
  function strengthChecker() {
    let password = document.getElementById("password").value;
    
  
    parameters.letters = /[A-Za-z]+/.test(password) ? true : false;
    parameters.numbers = /[0-9]+/.test(password) ? true : false;
    parameters.special = /[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?`~]/.test(password) ? true : false;
    parameters.count = password.length > 7 ? true : false;
  
    let barLength = Object.values(parameters).filter(value => value).length;
  
    console.log(Object.values(parameters), barLength);
  
    passwordChecker.innerHTML = "";
    for (let i = 0; i < barLength; i++) {
      let span = document.createElement("span");
      span.classList.add("strength");
      passwordChecker.appendChild(span);
    }
  }  
  