const userLang = navigator.language || navigator.userLanguage; 

// determines if the user has a set theme
function detectLanguage(){
    let language = "es";    // default to light

    // local storage is used to override OS theme settings
    if(localStorage.getItem("language")){
        if(localStorage.getItem("language") == "es"){
            language = "es";
        }
    } else {
        if (!userLang.startsWith("es")) {
            document.location.href="/en";
        }
    }
}
detectLanguage();
