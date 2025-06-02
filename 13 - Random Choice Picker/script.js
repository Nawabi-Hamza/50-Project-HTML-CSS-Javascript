

const tagsEl = document.querySelector(".tags")
const textArea = document.getElementById("textarea")


textArea.addEventListener("keypress",function(e){
    // console.log(createTagInput(e.target.value))
    createTagInput(e.target.value)
    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ''
        },10)
        randomSelect()
    }
})

function createTagInput(input){
    const tags = input.split(",").filter( tag=> tag.trim() !== "" ).map( tag => tag.trim() )
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.textContent = tag
        tagsEl.appendChild(tagEl)
        
    });
}

function randomSelect(){
    const times = 30
    const interval = setInterval(()=>{
        const random = pickRandomTag()
        highlightTag(random)
        setTimeout(()=>{
            unHighlightTag(random)
        },100)
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        },100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove("highlight")
}