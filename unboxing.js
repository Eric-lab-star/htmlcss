const cube = document.querySelector(".cube");
const animBTN = document.querySelector(".spinBTN");
const openBTN = document.querySelector(".openBTN");

animBTN.addEventListener("click", rotateCube);

function rotateCube() {
  cube.classList.remove("animate");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      cube.classList.add("animate");
    });
  });
}

openBTN.addEventListener("click", openCube);

function openCube() {
  const topFace = cube.querySelector(".cube__face.cube--top");
  const coverL = topFace.querySelector(".cover--left");
  const coverR = topFace.querySelector(".cover--right");
  coverL.classList.toggle("open");
  coverR.classList.toggle("open");
}
