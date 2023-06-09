document.getElementById('toggleBtn').addEventListener('click', () => {
  const navbarItems = document.getElementById('navbarItems');
  navbarItems.classList.toggle('show');
  navbarItems.classList.toggle('hide');
});

var svgFiles = [
  "./assets/svg animated files/Property 1=Variant5.svg",
  "./assets/svg animated files/Property 1=Variant2.svg",
  "./assets/svg animated files/Property 1=Variant3.svg",
  "./assets/svg animated files/Property 1=Variant4.svg"
];

var svgContainer = document.getElementById("svg-container");
var currentIndexSvg = 0;

setInterval(function () {
  svgContainer.style.backgroundImage = "url('" + svgFiles[currentIndexSvg] + "')";
  currentIndexSvg = (currentIndexSvg + 1) % svgFiles.length;
}, 1000);

var spanElement = document.getElementById("wordChange");
var texts = ["create", "send", "answer"];
var colors = ["#FF5400", "#7209B7", "#FF0054"];
var currentIndex = 0;

setInterval(function () {
  spanElement.textContent = texts[currentIndex];
  spanElement.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}, 1500);
