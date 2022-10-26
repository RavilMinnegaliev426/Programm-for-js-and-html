const btn = document.querySelector("#myBtn");
const div1 = document.querySelector("#spoiler");

function toggeDivlVisibility() {
  div1.classList.toggle("closed");
}

btn.addEventListener("click", toggeDivlVisibility);
document.addEventListener("keydown", keyPress);
function keyPress(event) {
  if (!div1.classList.contains("closed")) {
    if (event.key === "Escape") {
      div1.classList.toggle("closed");
    }
  }
}
