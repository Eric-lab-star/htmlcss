const body = document.querySelector("body");
const form = body.querySelector("form");
const cube = document.querySelector(".cube");
let currentClass = "";
form.addEventListener("change", () => {
  const checkedRadio = form.querySelector(":checked");
  const showClass = "show-" + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  console.log(currentClass);
  cube.classList.add(showClass);
  currentClass = showClass;
});
