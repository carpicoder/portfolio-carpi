const menu = document.querySelector(".main-nav > ul");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menuItems = document.querySelectorAll(".main-nav > ul > li")

openMenu.addEventListener("click", () => {
    menu.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("visible");
    })
})



/* GO TOP */

let goTopButton = document.querySelector("#go-top");
let scrollDownButton = document.querySelector("#scroll-down");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopButton.classList.add("visible");
        scrollDownButton.classList.remove("visible");
    } else {
        goTopButton.classList.remove("visible");
        scrollDownButton.classList.add("visible");
    }
}