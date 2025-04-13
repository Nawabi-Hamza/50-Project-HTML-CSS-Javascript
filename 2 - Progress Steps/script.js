console.log("Script loaded");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if(currentActive >= circles.length) {
    currentActive = circles.length;
    next.disabled = true;
  }else{
    prev.disabled = false;
  }

  progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
//   console.log(currentActive);
  updateCircle();
});

prev.addEventListener("click", () => {
    currentActive--;
  
    if(currentActive <= 1) {
      currentActive = 1;
      prev.disabled = true;
    }else{
      next.disabled = false;
    }
    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
    // console.log(currentActive);
    updateCircle();
});

function updateCircle() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });
}