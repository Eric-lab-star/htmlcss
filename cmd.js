const body = document.querySelector("body");
const toggle = body.querySelector("#start");
const content = body.querySelector("#content");

function track(event) {
  event.stopPropagation();
  let locationX = event.clientX;
  let locationY = event.clientY;
  content.innerHTML = `location x : ${locationX}; locationY : ${locationY}`;

  function clear() {
    if (toggle.innerHTML == "end") {
      toggle.innerHTML = "start";
      body.removeEventListener("mousemove", track);
    }
  }
  toggle.addEventListener("mouseout", clear);
  toggle.addEventListener("mouseup", clear);
}

toggle.addEventListener("mousedown", function () {
  if (toggle.innerHTML == "start") {
    start.innerHTML = "end";
    body.addEventListener("mousemove", track);
  }
});

function handleClick(event) {
  console.log(event.target.tagName);
  if (event.target.tagName == "BODY") {
    console.log("click");
  }
}

body.addEventListener("click", handleClick);