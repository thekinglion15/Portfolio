let languages = {};

function loadLanguage() {
    fetch("../assets/languages.json").then(response => response.json()).then(data => {
        languages = data;
        changeLanguage();
    }).catch(error => console.log("Error:", error));
}

function changeLanguage() {
    const language = document.getElementById("lang").value;

    setSelectLang(languages[language].selectOption);
    setNavbarLang(languages[language].navbar);
    setHeaderLang(languages[language].header);
    setAboutLang(languages[language].about);
    setEducationLang(languages[language].education);
    setSkillsLang(languages[language].skills, language);
    setWorksLang(languages[language].works);
    setContactLang(languages[language].contact);

    document.getElementById("copyright").innerText = languages[language].footer.copyright;
    document.documentElement.lang = language;
}

function setSelectLang(select) {
    document.getElementById("label-lang").innerText = select.label;
    document.getElementById("es").innerText = select.spanish;
    document.getElementById("en").innerText = select.english;
}

function setNavbarLang(navbar) {
    Object.keys(navbar).forEach((key, index) => {
        const element = document.getElementById(`nav${index + 1}`);
        if (element) element.innerText = navbar[key];
    });
}

function setHeaderLang(header) {
    document.getElementById("hi").innerText = header.hi;
    document.getElementById("touch").innerText = header.touch;
}

function setAboutLang(about) {
    document.getElementById("about-subtitle").innerText = about.subtitle;
    document.getElementById("about-title").innerText = about.title;
    document.getElementById("about-text").innerText = about.text;
    document.getElementById("hire").innerText = about.hire;
    document.getElementById("download").innerText = about.download;
}

function setEducationLang(education) {
    document.getElementById("education-subtitle").innerText = education.subtitle;
    document.getElementById("education-title").innerText = education.title;
    document.getElementById("education-text").innerText = education.text;
}

function setSkillsLang(skills, language) {
    document.getElementById("skills-subtitle").innerText = skills.skills;
    document.getElementById("skills-title").innerText = skills.title;
    document.getElementById("skills-text").innerText = skills.text;
    document.getElementById("skills-skills").innerText = skills.skills;
    document.getElementById("skills-tools").innerText = skills.tools;

    const elemento = document.querySelector('.skills-toggle');
    if(language == "en") {
        elemento.style.setProperty("--width-toggle", "93px");
        elemento.style.setProperty("--width-toggle-active-before", "94px");
        elemento.style.setProperty("--left-toggle", "98px");
    }
    else if(language == "es") {
        elemento.style.setProperty("--width-toggle", "150px");
        elemento.style.setProperty("--width-toggle-active-before", "159px");
        elemento.style.setProperty("--left-toggle", "160px");
    }
}

function setWorksLang(works) {
    document.getElementById("works-subtitle").innerText = works.subtitle;
    document.getElementById("works-title").innerText = works.title;
    document.getElementById("works-text").innerText = works.text;
    document.getElementById("project1-name").innerText = works.project1.name;
    document.getElementById("project1-date").innerText = works.project1.date;
    document.getElementById("works-link").innerText = works.link;
}

function setContactLang(contact) {
    document.getElementById("contact-subtitle").innerText = contact.subtitle;
    document.getElementById("contact-title").innerText = contact.title;
    document.getElementById("contact-text").innerText = contact.text;
    document.getElementById("contact-address").innerText = contact.address;
    document.getElementById("contact-address-me").innerText = contact.addressMe;
    document.getElementById("contact-phone").innerText = contact.phone;
    document.getElementById("contact-email").innerText = contact.email;
    document.getElementById("form-name").innerText = contact.form.name;
    document.getElementById("form-email").innerText = contact.form.email;
    document.getElementById("form-phone").innerText = contact.form.phone;
    document.getElementById("form-message").innerText = contact.form.message;
    document.getElementById("form-send").innerText = contact.form.send;
    document.getElementById("message").placeholder = contact.form.textarea;
}

window.onload = loadLanguage;