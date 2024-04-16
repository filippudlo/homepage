console .log("Witam");
let button = document.querySelector("button")
let body = document.querySelector("body")


button.addEventListener("click", () => {
    body.classList.toggle("dark");
  

    if (button.innerText === "Zmień motyw na ciemny") {
        button.innerText = "Zmień motyw na jasny";
    } else {
        button.innerText = "Zmień motyw na ciemny";}
})
