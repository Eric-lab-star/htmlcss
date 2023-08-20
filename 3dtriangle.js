const body = document.querySelector("body");
const cube = document.querySelector(".cube");
let cubeStyle = cube.style;
let currentClass = "";

let lastX = 0;
let lastY = 0;

let rotX = 0;
let rotY = 0;
function rotateCube(event) {
  lastX = event.pageX;
  lastY = event.pageY;
  function spin(event) {
    deltaX = event.pageX - lastX;
    deltaY = event.pageY - lastY;
    console.log(deltaX);

    lastX = event.pageX;
    lastY = event.pageY;

    rotY -= deltaX * -0.5;
    rotX += deltaY * -0.5;
    cube.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    if (event.type == "mouseup") {
      body.removeEventListener("mousemove", spin);
      return;
    }
  }
  body.addEventListener("mouseup", spin);
  body.addEventListener("mousemove", spin);
}

body.addEventListener("mousedown", rotateCube);
