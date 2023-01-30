const userLang = navigator.language || navigator.userLanguage; 

// determines if the user has a set theme
function detectLanguage(){
    // local storage is used to override OS theme settings
    if(localStorage.getItem("language")){
        if(localStorage.getItem("language") == "es"){
            return
        }
    } else {
        if (!userLang.startsWith("es")) {
            document.location.href="/en";
        }
    }
}
detectLanguage();
