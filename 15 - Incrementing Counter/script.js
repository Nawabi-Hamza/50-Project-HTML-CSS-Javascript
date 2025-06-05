


document.addEventListener("DOMContentLoaded",function(){
    const counters = document.querySelectorAll(".counter")
    counters.forEach( counter => {
        counter.innerText = '0';

        const updateCounter = ()=>{
            const target  = +counter.getAttribute("data-target")
            const c = +counter.innerText
            const increment = target / 200
            if(c < target){
                counter.innerText = `${Math.ceil(c+increment)}`
                setTimeout(updateCounter, 1)
            }else counter.innerText = target
            // console.log(increment)
        }

        updateCounter()
        // console.log(counter.getAttribute("data-target"))
        // for(let i=0; i<= parseInt(counter.getAttribute("data-target")) ; i++){
        //     // console.log(i)
        //     counter.textContent = i;
        // }

    })
})