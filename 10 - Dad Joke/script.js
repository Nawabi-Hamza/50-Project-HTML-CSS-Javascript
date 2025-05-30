
const jokeElement = document.querySelector(".joke h3");
const jokeBtn = document.getElementById("jokeBtn")

async function fetchJoke(){
    fetch("https://icanhazdadjoke.com",{
        headers: {
            "Accept": "application/json"
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data?.status==200){
            return jokeElement.innerText = data.joke
        }
        return jokeElement.innerText = "Error fetching joke !"
    })
}
fetchJoke()


jokeBtn.addEventListener("click", fetchJoke)