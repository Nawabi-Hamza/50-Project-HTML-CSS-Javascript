console.log("Script loaded");

const container = document.querySelector(".container")
const open = document.getElementById("open")
const close = document.getElementById("close")
const circle = document.querySelector(".circle")

open.addEventListener("click",()=>{
    container.classList.add("show-nav");
    circle.style = "transform: rotate(-90deg)"
})
close.addEventListener("click",()=>{
    container.classList.remove("show-nav");
    circle.style = "transform: rotate(0deg)"

})