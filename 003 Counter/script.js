const display = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", counter);

function counter(e) {
  if (e.target.classList.contains("add")) {
    display.innerHTML++;
  }
  if (e.target.classList.contains("subtract")) {
    display.innerHTML--;
  }
  if (e.target.classList.contains("reset")) {
    display.innerHTML = 0;
  }
}