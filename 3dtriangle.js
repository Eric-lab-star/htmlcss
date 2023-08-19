const cube = document.querySelector(".cube");

let currentClass = "";
cube.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log(event.currentTarget);
  const target = cube.querySelector(".cube__face");
  const targetValue = target.attributes["value"].value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  currentClass = "show-" + targetValue;
  cube.classList.add(currentClass);

  console.log(target.attributes["value"].value);
});
