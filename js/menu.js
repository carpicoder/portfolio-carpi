const menu = document.querySelector(".main-nav > ul");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", () => {
    menu.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("visible");
})