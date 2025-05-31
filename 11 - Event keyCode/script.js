



window.addEventListener("keypress",function(e){
    const key = document.getElementById("key")
    const keyCode = document.getElementById("keyCode")
    const code = document.getElementById("code")
    key.textContent = e.key
    keyCode.textContent = e.charCode
    code.textContent = e.code

    console.log(e)
})