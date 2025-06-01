

console.log('script loaded')


const toggleBtn = document.querySelectorAll(".faq-toggle")
const faqs = document.querySelectorAll(".faq")

toggleBtn.forEach( btn => {
    btn.addEventListener("click",function(){
        faqs.forEach( faq => faq.classList.remove("active") )
        btn.parentNode.classList.toggle("active")
    })
})