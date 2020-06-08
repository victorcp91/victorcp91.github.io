import "./index.html";
import "./style.css";

const oneDiv = document.querySelector("div");
console.log(oneDiv);

let mousedown = false;

oneDiv.onmousedown = function(e) {
  mousedown = true;
  oneDiv.style.setProperty("--positionx", e.clientX - oneDiv.offsetLeft + "px");
  oneDiv.style.setProperty("--positiony", e.clientY - oneDiv.offsetTop + "px");
};

oneDiv.onmouseup = function(e) {
  mousedown = false;
};

oneDiv.addEventListener("mousemove", e => {
  const xCenter = window.innerWidth / 2;
  const yCenter = window.innerHeight / 2;
  oneDiv.style.setProperty("--translatex", -(e.clientX - xCenter) + "px");
  oneDiv.style.setProperty("--translatey", -(e.clientY - yCenter) + "px");
  oneDiv.style.setProperty("--positionx", e.clientX - oneDiv.offsetLeft + "px");
  oneDiv.style.setProperty("--positiony", e.clientY - oneDiv.offsetTop + "px");
});
