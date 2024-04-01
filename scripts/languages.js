let languages = {};

function loadLanguage() {
    fetch("../assets/languages.json").then(response => response.json()).then(data => {
        languages = data;
        changeLanguage();
    }).catch(error => console.log("Error"));
}

function changeLanguage() {
    const language = document.getElementById("lang").value;
    document.getElementById("es").innerText = languages[language].selectOptionSpanish;
    document.getElementById("en").innerText = languages[language].selectOptionEnglish;
    document.getElementById("nav1").innerText = languages[language].navbarHome;
    document.getElementById("nav2").innerText = languages[language].navbarAbout;
    document.getElementById("nav3").innerText = languages[language].navbarEducation;
    document.getElementById("nav4").innerText = languages[language].navbarSkills;
    document.getElementById("nav5").innerText = languages[language].navbarWorks;
    document.getElementById("nav6").innerText = languages[language].navbarContact;
    document.documentElement.lang = language;
}

window.onload = function() {
    loadLanguage()
}