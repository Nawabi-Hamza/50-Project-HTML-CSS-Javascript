console.log("Script loaded");

const search = document.querySelector(".search")
const toggleBtn = document.querySelector(".btn")
const input = document.querySelector(".input")

toggleBtn.addEventListener("click", ()=>{
    search.classList.toggle("active")
    input.focus()  
})