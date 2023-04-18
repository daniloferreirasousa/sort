const form     = document.querySelector("form"),
      loader   = document.querySelector(".loader-area"),
      reloader = document.querySelector(".reloader")

var result = document.querySelector(".result"),
    title  = document.querySelector(".container-title")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    var min = document.querySelector("#numberIni").value,
        max = document.querySelector("#numberFin").value

    nSort = sortear(min, max)
    result.innerHTML = nSort

    title.style.opacity = "0"
    
    form.style.opacity = "0"

    loader.style.display = "flex"
    loader.style.opacity = "1"

    setTimeout(() => {
        
        form.style.display = "none"
        
        loader.style.opacity = "0"
        loader.style.display = "none"

        title.style.display = "flex"
        title.style.opacity = "1"
        title.innerHTML = "O número sorteado foi:"

        result.style.display = 'flex'
        result.style.opacity = "1"
        
        reloader.style.display = "flex"
        reloader.style.opacity = "1"
        
    }, 2500);
})

reloader.addEventListener("click", () => {
    window.location.reload()
});


function sortear(min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}