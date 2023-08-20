const body = document.querySelector("body");
const toggle = body.querySelector("#start");
const content = body.querySelector("#content");

function track(event) {
  let locationX = event.clientX;
  let locationY = event.clientY;
  content.innerHTML = `location x : ${locationX}; locationY : ${locationY}`;
  console.log(locationX);
}

toggle.addEventListener("mousedown", function (event) {
  if (toggle.innerHTML == "start") {
    start.innerHTML = "end";
    body.addEventListener("mousemove", track);
  }
});

function clear(event) {
  if (toggle.innerHTML == "end") {
    toggle.innerHTML = "start";
    body.removeEventListener("mousemove", track);
  }
}

toggle.addEventListener("mouseout", clear);

toggle.addEventListener("mouseup", clear);
