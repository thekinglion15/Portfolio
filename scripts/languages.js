/**
 * Object that will store language data loaded from the languages.json file.
 * @type {object}
 */
let languages = {};

/**
 * Loads data from the languages.json file and updates the interface with the selected language.
 */
function loadLanguage() {
    fetch("assets/languages.json").then(response => response.json()).then(data => {
        languages = data;
        changeLanguage();
    }).catch(error => console.log("Error:", error));
}

/**
 * Changes the interface language according to the user-selected option.
 */
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

/**
 * Sets the language for the selection options in the interface.
 * @param {object} select - Object containing the selection options for the language.
 */
function setSelectLang(select) {
    document.getElementById("label-lang").innerText = select.label;
    document.getElementById("es").innerText = select.spanish;
    document.getElementById("en").innerText = select.english;
}

/**
 * Sets the language for the navbar elements in the interface.
 * @param {object} navbar - Object containing the language data for navbar elements.
 */
function setNavbarLang(navbar) {
    Object.keys(navbar).forEach((key, index) => {
        const element = document.getElementById(`nav${index + 1}`);
        if (element) element.innerText = navbar[key];
    });
}

/**
 * Sets the language for the header elements in the interface.
 * @param {object} header - Object containing the language data for header elements.
 */
function setHeaderLang(header) {
    document.getElementById("hi").innerText = header.hi;
    document.getElementById("touch").innerText = header.touch;
}

/**
 * Sets the language for the about section in the interface.
 * @param {object} about - Object containing the language data for about section.
 */
function setAboutLang(about) {
    document.getElementById("about-subtitle").innerText = about.subtitle;
    document.getElementById("about-title").innerText = about.title;
    document.getElementById("about-text").innerText = about.text;
    document.getElementById("hire").innerText = about.hire;
    document.getElementById("download").innerText = about.download;
}

/**
 * Sets the language for the education section in the interface.
 * @param {object} education - Object containing the language data for education section.
 */
function setEducationLang(education) {
    document.getElementById("education-subtitle").innerText = education.subtitle;
    document.getElementById("education-title").innerText = education.title;
    document.getElementById("education-text").innerText = education.text;
}

/**
 * Sets the language for the skills section in the interface and adjusts the toggle button styles based on the language.
 * @param {object} skills - Object containing the language data for skills section.
 * @param {string} language - The selected language.
 */
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

/**
 * Sets the language for the works section in the interface.
 * @param {object} works - Object containing the language data for works section.
 */
function setWorksLang(works) {
    document.getElementById("works-subtitle").innerText = works.subtitle;
    document.getElementById("works-title").innerText = works.title;
    document.getElementById("works-text").innerText = works.text;
    document.getElementById("project1-name").innerText = works.project1.name;
    document.getElementById("project1-date").innerText = works.project1.date;
    //document.getElementById("works-link").innerText = works.link;
}

/**
 * Sets the language for the contact section in the interface.
 * @param {object} contact - Object containing the language data for contact section.
 */
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

/**
 * Function that runs when the window has fully loaded.
 * Loads the default language when the page loads.
 */
window.onload = loadLanguage;