/**
 * version: 1.0
 * author:  Danilo Ferreira Sousa
 */
const form     = document.querySelector("form"),
      loader   = document.querySelector(".loader-area"),
      reloader = document.querySelector(".reloader"),
      dark     = document.querySelector("#dark")

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
        
    }, 2000);
})

reloader.addEventListener("click", () => {
    window.location.reload()
});


function sortear(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min)
}


/**
 * Locais para tratar dark
 * - header dark
 * - div container dark-l
 * - form dark
 * - footer dark
 */

const header = document.querySelector("header"),
      container = document.querySelector("div.container"),
      footer = document.querySelector("footer")

dark.addEventListener("click", () => {
   if(header.classList.contains("dark") && container.classList.contains("dark-l") && form.classList.contains("dark") && footer.classList.contains("dark")) 
   {
    header.classList.remove("dark")
    container.classList.remove("dark-l")
    form.classList.remove("dark")
    footer.classList.remove("dark")
   }
   else {
        header.classList.add("dark")
        container.classList.add("dark-l")
        form.classList.add("dark")
        footer.classList.add("dark")
   }
})