// global variables
const rangeX = document.querySelector("#yAxis");
const rangeY = document.querySelector("#xAxis");
const body = document.querySelector("body");
const cube = document.querySelector(".cube");

let cubeStyle = cube.style;
let currentClass = "";

// rotateCube function variable
// rotateCube function rotates cube, which is attached to body element, on mouse event.
let lastX = 0;
let lastY = 0;
let rotX = 0;
let rotY = 0;

function spin(event) {
  deltaX = event.pageX - lastX;
  deltaY = event.pageY - lastY;

  lastX = event.pageX;
  lastY = event.pageY;

  rotY -= deltaX * -0.5;
  if (rotY < 0) {
    rotY = 0;
  } else if (rotY >= 180) {
    rotY = 180;
  }

  rotX += deltaY * -0.5;
  if (rotX <= 0) {
    rotX = 0;
  } else if (rotX >= 180) {
    rotX = 180;
  }
  cube.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
  rangeX.value = rotY;
  rangeY.value = rotX;
}

function rotateCube(event) {
  lastX = event.pageX;
  lastY = event.pageY;
  cube.addEventListener("mouseup", function () {
    cube.removeEventListener("mousemove", spin);
  });
  cube.addEventListener("mousemove", spin);
}
cube.addEventListener("mousedown", rotateCube);

// rangeController function rotates cube with range element
function rangeController(event) {
  const target = event.target;
  if (target.id == "yAxis") {
    rotY = parseInt(target.value);
    cube.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    return;
  }

  if (target.id == "xAxis") {
    rotX = parseInt(target.value);
    cube.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    return;
  }
}

rangeX.addEventListener("input", rangeController);
rangeY.addEventListener("input", rangeController);
