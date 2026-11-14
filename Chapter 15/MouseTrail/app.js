let dots = [];

for (let i = 0; i < 25; i++) {
  let dot = document.createElement("div");
  dot.className = "dot";
  document.body.appendChild(dot);
  dots.push(dot);
}

let index = 0;

window.addEventListener("mousemove", event => {
  let dot = dots[index];

  dot.style.left = (event.pageX - 5) + "px";
  dot.style.top = (event.pageY - 5) + "px";

  index = (index + 1) % dots.length;
});