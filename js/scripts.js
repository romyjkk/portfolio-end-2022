/* opening and closing hamburger menu */

const hamburgerMenu = document.querySelector("header nav ul:last-of-type")
const menuButton = document.querySelector("header nav ul:first-of-type li button")

function showMenu() {
    hamburgerMenu.classList.toggle("menu")
}

menuButton.addEventListener("click", showMenu)