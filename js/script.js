{ 
    
const body = document.querySelector("body")
    
const init = () => {
const button = document.querySelector("button")

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    Change();
})}

init();

const Change = () => {
    
button.innerText = body.classList.contains("dark") ? "Zmnień motyw na jasny":" Zmnień motyw na ciemny"
}
}
 
 