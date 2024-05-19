/**
 * Determines the appropriate logos for MySQL, MongoDB, MariaDB, ITLA, and freeCodeCamp based on the current theme.
 */
startMySql = localStorage.getItem("theme") === "dark_theme" ? "mysql-dark.png" : "mysql-light.png";
startMongo = localStorage.getItem("theme") === "dark_theme" ? "mongodb-dark.png" : "mongodb-light.png";
startMaria = localStorage.getItem("theme") === "dark_theme" ? "mariadb-dark.png" : "mariadb-light.png";
startItla = localStorage.getItem("theme") === "dark_theme" ? "itla-dark.png" : "itla-light.png";
startFree = localStorage.getItem("theme") === "dark_theme" ? "freecodecamp-dark.png" : "freecodecamp-light.png";
startEfset = localStorage.getItem("theme") === "dark_theme" ? "efset-dark.png" : "efset-light.png";

/**
 * Contains an array of skills with their respective logos and alternative text.
 */
const skills = [
    { name: "C#", logo: "csharp.png", alt: "C#" },
    { name: "C++", logo: "cpp.png", alt: "C++" },
    { name: "C", logo: "c.png", alt: "C" },
    { name: "Python", logo: "python.png", alt: "Python" },
    { name: "Java", logo: "java.png", alt: "Java" },
    { name: "HTML5", logo: "html5.png", alt: "HTML5" },
    { name: "CSS3", logo: "css3.png", alt: "CSS3" },
    { name: "JavaScript", logo: "javascript.png", alt: "JavaScript" },
    { name: "TypeScript", logo: "typescript.png", alt: "TypeScript" },
    { name: "Bootstrap", logo: "bootstrap.png", alt: "Bootstrap" },
    { name: "Angular", logo: "angular.png", alt: "Angular" },
    { name: "React", logo: "react.png", alt: "React" },
    { name: "MySQL", logo: startMySql, alt: "MySQL" },
    { name: "SQLite", logo: "sqlite.png", alt: "SQLite" },
    { name: "SQL Server", logo: "sqlserver.png", alt: "SQL Server" },
    { name: "MongoDB", logo: startMongo, alt: "MongoDB" },
    { name: "PostgreSQL", logo: "postgresql.png", alt: "PostgreSQL" },
    { name: "MariaDB", logo: startMaria, alt: "MariaDB" }
];

/**
 * Contains an array of tools with their respective logos and alternative text.
 */
const tools = [
    { name: ".NET", logo: "dotnet.png", alt: ".NET" },
    { name: "Git", logo: "git.png", alt: "Git" },
    { name: "Linux", logo: "linux.png", alt: "Linux" },
    { name: "VS Code", logo: "vscode.png", alt: "VS Code" },
    { name: "Photoshop", logo: "photoshop.png", alt: "Photoshop" },
    { name: "Command Line", logo: "command-line.png", alt: "Command Line" },
    { name: "Trello", logo: "trello.png", alt: "Trello" },
    { name: "Selenium", logo: "selenium.png", alt: "Selenium" }
];

/**
 * Contains an array of educational institutions with their respective logos, names, and programs.
 */
const educations = [
    { logo: "uasd.png", institution: "UASD", programs: ["Licenciatura en Informática", "Diplomado en Ciberseguridad"]},
    { logo: "mescyt.png", institution: "MESCYT", programs: ["English Immersion Program"] },
    { logo: startItla, institution: "ITLA", programs: ["Ethical Hacking", "C#.Net Intermedio"] },
    { logo: "harvard.png", institution: "Harvard", programs: ["CS50's Introduction to Programming with Python", "CS50's Introduction to Databases with SQL"] },
    { logo: "google-activate.png", institution: "Google Activate", programs: ["Cloud Computing", "Desarrollo de Apps Móviles", "Introducción al Desarrollo Web I", "Introducción al Desarrollo Web II"] },
    { logo: "cisco.png", institution: "CISCO", programs: ["Junior Cybersecurity Analyst Career Path", "Network Technician Career Path", "Python Essentials 1", "Python Essentials 2", "English For IT 1"] },
    { logo: "oracle-one.png", institution: "Oracle ONE", programs: ["Principiante en Programación G6 - ONE", "Front End G6 - ONE", "Lógica de programación con JavaScript"] },
    { logo: startFree, institution: "freeCodeCamp", programs: ["Responsive Web Design", "Front End Development Libraries", "Foundational C#"] },
    { logo: startEfset, institution: "EF SET", programs: ["EF SET Certificate"] },
    { logo: "aprende.png", institution: "Aprende", programs: ["Diplomado Técnico en sistemas informáticos", "Diplomado Técnico instalador de red de acceso"] },
    { logo: "linkedin-learning.png", institution: "LinkedIn Learning", programs: ["Fundamentos de la carrera de administración de sistemas", "Fundamentos profesionales de analisis empresarial", "Fundamentos profesionales de asistencia administrativa", "Fundamentos profesionales de IA generativa", "Fundamentos profesionales del analisis de datos", "Fundamentos profesionales del desarrollo de software", "Fundamentos profesionales en ciberseguridad"] },
    { logo: "sololearn.png", institution: "SoloLearn", programs: ["C Intermediate", "C# Intermediate", "C++ Intermediate", "Java Intermediate", "JavaScript Intermediate", "SQL Intermediate", "Intermediate Python", "Coding Foundations", "Responsive Web Design", "Web Development", "Web Developer with Angular", "Tech for Everyone", "Ruby", "Kotlin", "PHP", "HTML", "CSS", "Angular", "Go", "Swift 4"] }
];

/**
 * Contains an array of educational certificates.
 */
const certificates = {
    "Licenciatura en Informática": "uasd_bachelor.png",
    "Diplomado en Ciberseguridad": "ciberseguridad_uasd.jpg",
    "English Immersion Program": "",
    "Ethical Hacking": "ethical_hacking.jpg",
    "C#.Net Intermedio": "csnet_intermedio.jpg",
    "CS50's Introduction to Programming with Python": "cs50p.png",
    "CS50's Introduction to Databases with SQL": "cs50sql.png",
    "Cloud Computing": "cloud_computing.jpg",
    "Desarrollo de Apps Móviles": "desarrollo_de_apps_moviles.jpg",
    "Introducción al Desarrollo Web I": "desarrollo_web1.jpg",
    "Introducción al Desarrollo Web II": "desarrollo_web2.jpg",
    "Junior Cybersecurity Analyst Career Path": "junior_cybersecurity_analyst.jpg",
    "Network Technician Career Path": "network_technician.jpg",
    "Python Essentials 1": "python_essentials1.jpg",
    "Python Essentials 2": "python_essentials2.jpg",
    "English For IT 1": "english_for_it1.jpg",
    "Principiante en Programación G6 - ONE": "principiante_en_programacion.jpg",
    "Front End G6 - ONE": "front_end.jpg",
    "Lógica de programación con JavaScript": "logica_de_programacion.jpg",
    "Responsive Web Design": "responsive_web_design_free.jpg",
    "Front End Development Libraries": "front_end_development_libraries.jpg",
    "Foundational C#": "foundational_cs.jpg",
    "EF SET Certificate": "efset_certificate.png",
    "Diplomado Técnico en sistemas informáticos": "tecnico_en_sistemas_informaticos.jpg",
    "Diplomado Técnico instalador de red de acceso": "tecnico_instalador_de_red_de_acceso.jpg",
    "Fundamentos de la carrera de administración de sistemas": "administracion_de_sistemas.jpg",
    "Fundamentos profesionales de analisis empresarial": "analisis_empresarial.jpg",
    "Fundamentos profesionales de asistencia administrativa": "asistencia_administrativa.jpg",
    "Fundamentos profesionales de IA generativa": "ia_generativa.jpg",
    "Fundamentos profesionales del analisis de datos": "analisis_de_datos.jpg",
    "Fundamentos profesionales del desarrollo de software": "desarrollo_de_software.jpg",
    "Fundamentos profesionales en ciberseguridad": "ciberseguridad.jpg",
    "C Intermediate": "c_intermediate.jpg",
    "C# Intermediate": "cs_intermediate.jpg",
    "C++ Intermediate": "cpp_intermediate.jpg",
    "Java Intermediate": "java_intermediate.jpg",
    "JavaScript Intermediate": "js_intermediate.jpg",
    "SQL Intermediate": "sql_intermediate.jpg",
    "Intermediate Python": "intermediate_python.jpg",
    "Coding Foundations": "coding_foundations.jpg",
    "Web Development": "web_development.jpg",
    "Web Developer with Angular": "web_developer_with_angular.jpg",
    "Tech for Everyone": "tech_for_everyone.jpg",
    "Ruby": "ruby.jpg",
    "Kotlin": "kotlin.jpg",
    "PHP": "php.jpg",
    "HTML": "html.jpg",
    "CSS": "css.jpg",
    "Angular": "angular.jpg",
    "Go": "go.jpg",
    "Swift 4": "swift.jpg"
};

/**
 * Enables the theme toggle functionality.
 * Toggles between light and dark themes when the theme toggle button is clicked.
 * Updates the logos for skills and educations based on the current theme.
 */
const themeToggle = document.querySelector("[data-theme-btn]");
themeToggle.addEventListener("click", function () {
    // Checks if the light theme is active.
    lightTheme = themeToggle.classList.contains("active");
    // Array containing logo filenames for theme change.
    const logosChange = [
        "mysql-dark.png", "mongodb-dark.png", "mariadb-dark.png",
        "itla-dark.png", "freecodecamp-dark.png", "efset-dark.png",
        "mysql-light.png", "mongodb-light.png", "mariadb-light.png",
        "itla-light.png", "freecodecamp-light.png", "efset-light.png"
    ];
    // Updates logos for skills based on the current theme.
    skills.forEach(skill => {
        if(logosChange.includes(skill.logo)) {
            const original = lightTheme ? skill.logo.replace("-dark", "-light") : skill.logo.replace("-light", "-dark");
            skill.logo = original;
            // Updates the logo image on the corresponding card.
            const cardIcon = document.querySelector(`[alt="${skill.alt}"]`);
            if(cardIcon)
                cardIcon.src = `assets/logos/${original}`;
        }
    });
    // Updates logos for educations based on the current theme.
    educations.forEach(education => {
        if (logosChange.includes(education.logo)) {
            const original = lightTheme ? education.logo.replace("-dark", "-light") : education.logo.replace("-light", "-dark");
            education.logo = original;
            // Updates the logo image on the corresponding card.
            const cardIcon = document.querySelector(`[alt="${education.institution}"]`);
            if (cardIcon)
                cardIcon.src = `assets/logos/${original}`;
        }
    });
});

// Selecting the skills list and tools list elements from the DOM.
const skillsList = document.querySelector(".skills-list");
const toolsList = document.querySelector(".tools-list");

/**
 * Represents a function to create a skill card element based on the provided skill data.
 * @param {Object} skill - The skill data containing name, logo, and alt attributes.
 * @returns {HTMLElement} - The generated skill card element.
 */
function createSkillCard(skill) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "skill-card";
    div.innerHTML = `
        <div class="tooltip">${skill.name}</div>
        <div class="card-icon">
            <img src="assets/logos/${skill.logo}" alt="${skill.alt}">
        </div>
    `;
    li.appendChild(div);
    return li;
}

/**
 * Generates a skills list based on the provided data and appends it to the specified list element.
 * @param {Array} data - An array of skill objects containing name, logo, and alt attributes.
 * @param {HTMLElement} list - The HTML element where the generated skills list will be appended.
 */
function generateSkillsList(data, list) {
    data.forEach(skill => {
        const skillCard = createSkillCard(skill);
        list.appendChild(skillCard);
    });
}

// Generating and appending the skills list to the skills list element.
generateSkillsList(skills, skillsList);
// Generating and appending the tools list to the tools list element.
generateSkillsList(tools, toolsList);


// Selecting the education container element from the DOM
const educationsContainer = document.querySelector(".education-container");

/**
 * Generates and appends education details to the appropriate column in the education container.
 * @param {Array} educations - An array of education objects containing logo, institution, and programs attributes.
 */
educations.forEach((item, index) => {
    // Determine the column to which the education details will be appended based on the index.
    const column = index < 6 ? document.querySelector(".education-column:first-child") : document.querySelector(".education-column:last-child");
    // Create elements for the education details.
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const img = document.createElement("img");
    const title = document.createElement("span");
    const content = document.createElement("div");

    // Set attributes and content for the created elements.
    img.src = `assets/logos/${item.logo}`;
    img.alt = item.institution;
    title.className = "summary-title";
    title.textContent = item.institution;
    content.className = "details-content";

    // Generate program paragraphs and append them to the content div.
    item.programs.forEach((program) => {
        const p = document.createElement("p");
        p.textContent = `● ${program}`;
        p.classList.add("program");

        p.addEventListener("click", () => {;
            openModal(program, certificates[program], item.logo, item.institution);
        });

        content.appendChild(p);
    });

    // Append created elements to the details element.
    summary.appendChild(img);
    summary.appendChild(title);
    details.appendChild(summary);
    details.appendChild(content);
    // Append the details element to the appropriate column in the container.
    column.appendChild(details);
});

/**
 * Initializes accordion functionality for all 'details' elements on the page.
 * Creates an instance of the Accordion class for each 'details' element and assigns it to the 'accordion' property.
 */
document.querySelectorAll('details').forEach((el) => {
    const accordion = new Accordion(el);
    el.accordion = accordion;
});


const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close");

function openModal(program, imageUrl, iconUrl, institution) {
    modalTitle.innerHTML = `<img src="assets/logos/${iconUrl}" alt="${institution}">${program}`;
    modalImage.src = `assets/education/${imageUrl}`;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});