let balloon = document.querySelector("p");

let size = 100;

function handleKey(event) {
  if (event.key == "ArrowUp") {
    event.preventDefault();

    size *= 1.1;
    balloon.style.fontSize = size + "px";
  } 

  else if (event.key == "ArrowDown") {
    event.preventDefault();

    size *= 0.9;
    balloon.style.fontSize = size + "px";
  }

  if (size > 200) {
    balloon.textContent = "💥";
    window.removeEventListener("keydown", handleKey);
  }
}

window.addEventListener("keydown", handleKey);