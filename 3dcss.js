const body = document.querySelector("body");
const card = body.querySelector(".card");

card.addEventListener("click", function (e) {
  card.classList.toggle("is-flipped");
});
