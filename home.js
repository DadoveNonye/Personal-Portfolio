const menu = document.querySelector("#menu")
const navbar = document.querySelector("nav ul li")

menu.onclick = () => {
    menu.classList.toggle(".bx-x")
    navbar.classList.toggle("open")
}