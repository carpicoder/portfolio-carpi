const buttonLanguage = document.querySelector("#button-language");

buttonLanguage.addEventListener("click", () => {
    localStorage.setItem('language', 'es');
})