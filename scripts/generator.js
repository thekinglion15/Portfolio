/**
 * Determines the appropriate logos for MySQL, MongoDB, MariaDB, ITLA, and freeCodeCamp based on the current theme.
 */
startMySql = localStorage.getItem("theme") === "dark_theme" ? "mysql-dark.png" : "mysql-light.png";
startMongo = localStorage.getItem("theme") === "dark_theme" ? "mongodb-dark.png" : "mongodb-light.png";
startMaria = localStorage.getItem("theme") === "dark_theme" ? "mariadb-dark.png" : "mariadb-light.png";
startItla = localStorage.getItem("theme") === "dark_theme" ? "itla-dark.png" : "itla-light.png";
startFree = localStorage.getItem("theme") === "dark_theme" ? "freecodecamp-dark.png" : "freecodecamp-light.png";
startEfset = localStorage.getItem("theme") === "dark_theme" ? "efset-dark.png" : "efset-light.png";
startAsp = localStorage.getItem("theme") === "dark_theme" ? "asp-dark.png" : "asp-light.png";

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
    { name: "Windows", logo: "windows.png", alt: "Windows"},
    { name: "Linux", logo: "linux.png", alt: "Linux" },
    { name: "Office", logo: "office.png", alt: "Office"},
    { name: "Visual Studio", logo: "visualstudio.png", alt: "Visual Studio"},
    { name: "VS Code", logo: "vscode.png", alt: "VS Code" },
    { name: "Photoshop", logo: "photoshop.png", alt: "Photoshop" },
    { name: "Command Line", logo: "command-line.png", alt: "Command Line" },
    { name: "Trello", logo: "trello.png", alt: "Trello" },
    { name: "Selenium", logo: "selenium.png", alt: "Selenium" }
];

/**
 * Contains an array of educational institutions with their respective logos, names, and certificates.
 */
const educations = [
    {
        institution: "UASD", logo: "uasd.png",
        certificates: [
            { name: "Licenciatura en Informática", image: "uasd_01.png" },
            { name: "Diplomado en Ciberseguridad", image: "uasd_02.jpg" }]
    },
    { 
        institution: "UTECO", logo: "uteco.png",
        certificates: [
            { name: "Especialidad en Habilitación Docente Modalidad Técnico-Profesional, para el Nivel Secundario, Mención Informática y Comunicaciones", image: "uteco_01.jpg" }]
    },
    {
        institution: "MESCYT", logo: "mescyt.png",
        certificates: [
            { name: "English Immersion Program", image: "mescyt_01.jpg" }]
    },
    { 
        institution: "Microsoft Certified Educator", logo: "microsoft.png",
        certificates: [
            { name: "Technology Literacy for Educators - 21st Century Learning Design", image: "mce_01.jpg" }]
    },
    { 
        institution: "ITLA", logo: startItla,
        certificates: [
            { name: "Diplomado de Base de Datos SQL", image: "itla_01.jpg" },
            { name: "C#.Net Intermedio", image: "itla_02.jpg"},
            { name: "Ethical Hacking", image: "itla_03.jpg" },
            { name: "Cisco Certified Network Associate 3", image: "itla_04.jpg" }]

    },
    {
        institution: "Harvard", logo: "harvard.png",
        certificates: [
            { name: "CS50x" , image: "harvard_01.png"}, 
            { name: "CS50's Introduction to Databases with SQL", image: "harvard_02.png" },
            { name: "CS50's Introduction to Programming with Python", image: "harvard_03.png" },
            { name: "CS50's Introduction to Game Development", image: "harvard_04.png" },
            { name: "CS50's Understanding Technology", image: "harvard_05.png" }]
    },
    {
        institution: "Google Activate", logo: "google-activate.png",
        certificates: [
            { name: "Cloud Computing", image: "ga_01.jpg" },
            { name: "Desarrollo de Apps Móviles", image: "ga_02.jpg" },
            { name: "Introducción al Desarrollo Web I", image: "ga_03.jpg" },
            { name: "Introducción al Desarrollo Web II", image: "ga_04.jpg" }]
    },
    {
        institution: "CISCO", logo: "cisco.png",
        certificates: [
            { name: "Junior Cybersecurity Analyst Career Path", image: "cisco_01.jpg" },
            { name: "Network Technician Career Path", image: "cisco_02.jpg" },
            { name: "Python Essentials 2", image: "cisco_03.jpg" },
            { name: "English For IT 2", image: "cisco_04.jpg" },
            { name: "JavaScript Essentials 2", image: "cisco_05.jpg" },
            { name: "Data Analytics Essentials", image: "cisco_06.jpg" },
            { name: "Ethical Hacker", image: "cisco_07.jpg" },
            { name: "Endpoint Security", image: "cisco_08.jpg" },
            { name: "Cyber Threat Management", image: "cisco_09.jpg" },
            { name: "Cybersecurity Essentials", image: "cisco_10.jpg" },
            { name: "Network Defense", image: "cisco_11.jpg" },
            { name: "Network Support and Security", image: "cisco_12.jpg" },
            { name: "Network Addressing and Basic Troubleshooting", image: "cisco_13.jpg" },
            { name: "Networking Devices and Initial Configuration", image: "cisco_14.jpg" },
            { name: "Operating Systems Basics", image: "cisco_15.jpg" },
            { name: "Introduction to IoT", image: "cisco_16.jpg" }]
    },
    {
        institution: "freeCodeCamp", logo: startFree,
        certificates: [
            { name: "Responsive Web Design", image: "fcc_01.jpg" },
            { name: "Front End Development Libraries", image: "fcc_02.jpg" },
            { name: "Foundational C#", image: "fcc_03.jpg" }]
    },
    {
        institution: "Oracle", logo: "oracle.png",
        certificates: [
            { name: "Programa Oracle Next Education", image: "oracle_01.jpg" },
            { name: "SQL con MySQL Server de Oracle - ONE", image: "oracle_02.jpg" },
            { name: "Front End G6 - ONE", image: "oracle_03.jpg" },
            { name: "React G6 - ONE", image: "oracle_04.jpg" },
            { name: "Oracle Cloud Infrastructure - ONE", image: "oracle_05.jpg" },
            { name: "IA Generativa - ONE", image: "oracle_06.jpg" },
            { name: "Desarrollo Personal G6 - ONE", image: "oracle_07.jpg" },
            { name: "Principiante en Programación G6 - ONE", image: "oracle_08.jpg" },
            { name: "Emprendimiento, Agilidad y Protagonismo Profesional G6 - ONE", image: "oracle_09.jpg" }]
    },
    {
        institution: "EF SET", logo: startEfset,
        certificates: [
            { name: "EF SET Certificate", image: "efset_01.png" }]
    },
    {
        institution: "Aprende", logo: "aprende.png",
        certificates: [
            { name: "Diplomado Técnico en sistemas informáticos", image: "aprende_01.jpg" },
            { name: "Diplomado Técnico instalador de red de acceso", image: "aprende_02.jpg" },
            { name: "Diplomado Técnico en redes", image: "aprende_03.jpg" },
            { name: "Administrador de bases de datos", image: "aprende_04.jpg" },
            { name: "Desarrollador Front-end", image: "aprende_05.jpg" },
            { name: "Desarrollador Back-end", image: "aprende_06.jpg" },
            { name: "Electricista", image: "aprende_07.jpg" },
            { name: "Cómo utilizar la computadora", image: "aprende_08.jpg" },
            { name: "Prácticas de ofimática", image: "aprende_09.jpg" },
            { name: "Prácticas de mecanografía", image: "aprende_10.jpg" },
            { name: "Técnico en informática (Ofimática)", image: "aprende_11.jpg" },
            { name: "Finanzas personales", image: "aprende_12.jpg" }]
    },
    {
        institution: "LinkedIn Learning", logo: "linkedin-learning.png",
        certificates: [
            { name: "Fundamentos profesionales del desarrollo de software", image: "linkedin_01.jpg" },
            { name: "Fundamentos de la carrera de administración de sistemas", image: "linkedin_02.jpg" },
            { name: "Fundamentos profesionales en ciberseguridad", image: "linkedin_03.jpg" },
            { name: "Fundamentos profesionales de gestión de proyectos", image: "linkedin_04.jpg" },
            { name: "Fundamentos profesionales del analisis de datos", image: "linkedin_05.jpg" },
            { name: "Fundamentos profesionales de asistencia administrativa", image: "linkedin_06.jpg" },
            { name: "Fundamentos profesionales de IA generativa", image: "linkedin_07.jpg" },
            { name: "Fundamentos profesionales de analisis empresarial", image: "linkedin_08.jpg" },
            { name: "Fundamentos profesionales tecnología sostenible", image: "linkedin_09.jpg" },
            { name: "Desarrolla tus habilidades de productividad con IA generativa", image: "linkedin_10.jpg" },
            { name: "Microsoft Copilot para seguridad", image: "linkedin_11.jpg" }]
    },
    {
        institution: "SoloLearn", logo: "sololearn.png",
        certificates: [
            { name: "C# Intermediate", image: "sololearn_01.jpg" },
            { name: "SQL Intermediate", image: "sololearn_02.jpg" },
            { name: "C Intermediate", image: "sololearn_03.jpg" },
            { name: "C++ Intermediate", image: "sololearn_04.jpg" },
            { name: "Java Intermediate", image: "sololearn_05.jpg" },
            { name: "JavaScript Intermediate", image: "sololearn_06.jpg" },
            { name: "Intermediate Python", image: "sololearn_07.jpg" },
            { name: "Python Data Structures", image: "sololearn_08.jpg" },
            { name: "Python for Data Science", image: "sololearn_09.jpg" },
            { name: "Coding Foundations", image: "sololearn_10.jpg" },
            { name: "Data Programming", image: "sololearn_11.jpg" },
            { name: "Responsive Web Design", image: "sololearn_12.jpg" },
            { name: "Web Development", image: "sololearn_13.jpg" },
            { name: "Web Developer with Angular", image: "sololearn_14.jpg" },
            { name: "Tech for Everyone", image: "sololearn_15.jpg" },
            { name: "HTML", image: "sololearn_16.jpg" },
            { name: "CSS", image: "sololearn_17.jpg" },
            { name: "Angular", image: "sololearn_18.jpg" },
            { name: "Ruby", image: "sololearn_19.jpg" },
            { name: "Kotlin", image: "sololearn_20.jpg" },
            { name: "PHP", image: "sololearn_21.jpg" },
            { name: "Go", image: "sololearn_22.jpg" },
            { name: "R", image: "sololearn_23.jpg" },
            { name: "Swift 4", image: "sololearn_24.jpg" }]
    },
    {
        institution: "Alura", logo: "alura.png",
        certificates: [
            { name: "SQL con MySQL", image: "alura_01.jpg" },
            { name: "Masterclass Front-End", image: "alura_02.jpg" },
            { name: "Masterclass Power BI", image: "alura_03.jpg" },
            { name: "Inmersion IA", image: "alura_04.jpg" },
            { name: "Semana Carrera Tech IA", image: "alura_05.jpg" },
            { name: "Mi Carrera", image: "alura_06.jpg" },
            { name: "Excel", image: "alura_07.jpg" },
            { name: "Excel VBA", image: "alura_08.jpg" },
            { name: "Excel con IA: Usando IA's como Asistentes", image: "alura_09.jpg" },
            { name: "Explora React con JavaScript", image: "alura_10.jpg" },
            { name: "Nivelación TypeScript y React - Alura Boost", image: "alura_11.jpg" },
            { name: "Inteligencia artificial y Java - Crea herramientas poderosas con las APIs de OpenAI", image: "alura_12.jpg" },
            { name: "Jornada de IA para Desarrolladores", image: "alura_13.jpg" },
            { name: "Desde cero - HTML y CSS para proyectos Web", image: "alura_14.jpg" },
            { name: "Lógica de programación con JavaScript", image: "alura_15.jpg" },
            { name: "Comenzando en Inteligencia Artificial (IA)", image: "alura_16.jpg" }]
    },
    {
        institution: "Escuela Vocacional de las FFAA y PN", logo: "vocacional.png",
        certificates: [
            { name: "Electricidad Residencial", image: "vocacional_01.jpg" }]
    },
    {
        institution: "INFOTEP", logo: "infotep.png",
        certificates: [
            { name: "Instalaciones Básicas de Redes Electricas Residenciales", image: "infotep_01.png" },
            { name: "Servicio al cliente", image: "infotep_02.png" }]
    },
    {
        institution: "BanReservas", logo: "banreservas.png",
        certificates: [
            { name: "Educación Financiera Preserva", image: "banreservas_01.jpg" }]
    },
    {
        institution: "Escuela SB", logo: "escuela_sb.png",
        certificates: [
            { name: "Ahorro - Concepto e Instrumentos", image: "sb_01.jpg" },
            { name: "Planicacion y presupuesto", image: "sb_02.jpg" },
            { name: "Prestamos y tarjetas de credito", image: "sb_03.jpg" },
            { name: "Quien protege tus derechos financieros", image: "sb_04.jpg" }]
    },
    {
        institution: "Finanzas con Proposito", logo: "fcp.png",
        certificates: [
            { name: "Aprendiendo a Ahorrar con Propósito", image: "fcp_01.jpg" },
            { name: "Presupuesto, La Clave Para Tu Transformación Financiera", image: "fcp_02.jpg" },
            { name: "La Tarjeta de Crédito, Su Próposito de Usos y Beneficios", image: "fcp_03.jpg" },
            { name: "Certificación Finanzas Básicas Popular", image: "fcp_04.jpg" }]
    },
    {
        institution: "ED Team", logo: "ed_team.png",
        certificates: [
            { name: "La ruta del desarrollador web", image: "ed_01.jpg" },
            { name: "Markdown desde cero", image: "ed_02.jpg" },
            { name: "Introduccion a la Programacion Orientada a Objetos", image: "ed_03.jpg" },
            { name: "Introducción a la terminal", image: "ed_04.jpg" },
            { name: "Introduccion a Api Rest", image: "ed_05.jpg" }]
    },
    {
        institution: "INAP", logo: "inap.png",
        certificates: [
            { name: "Excel Básico", image: "inap_01.jpg" },
            { name: "Ortografía y Redacción", image: "inap_02.jpg" },
            { name: "Técnicas de Archivo", image: "inap_03.jpg" },
            { name: "Manejo Efectivo del Tiempo", image: "inap_04.jpg" },
            { name: "Inteligencia Emocional", image: "inap_05.jpg" }]
    },
    {
        institution: "Advanced Sterilization Products", logo: startAsp,
        certificates: [
            { name: "Estrategias para un Monitoreo Eficaz", image: "asp_01.jpg" }]
    },
    {
        institution: "CISA", logo: "cisa.png",
        certificates: [
            { name: "Desinfección de Alto Nivel", image: "cisa_01.jpg" }]
    },
];

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
        "itla-dark.png", "freecodecamp-dark.png", "efset-dark.png", "asp-dark.png",
        "mysql-light.png", "mongodb-light.png", "mariadb-light.png",
        "itla-light.png", "freecodecamp-light.png", "efset-light.png", "asp-light.png"
    ];
    // Updates logos for skills based on the current theme.
    skills.forEach(skill => {
        if(logosChange.includes(skill.logo)) {
            const original = lightTheme ? skill.logo.replace("-dark", "-light") : skill.logo.replace("-light", "-dark");
            skill.logo = original;
            // Updates the logo image on the corresponding card.
            const cardIcon = document.querySelector(`[alt="${skill.alt}"]`);
            if(cardIcon)
                cardIcon.src = `../assets/logos/${original}`;
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
                cardIcon.src = `../assets/logos/${original}`;
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
            <img src="../assets/logos/${skill.logo}" alt="${skill.alt}">
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
if(typeof skills !== "undefined" && typeof skillsList !== "undefined" && skillsList) {
    generateSkillsList(skills, skillsList);
}
// Generating and appending the tools list to the tools list element.
if(typeof tools !== "undefined" && typeof toolsList !== "undefined" && toolsList) {
    generateSkillsList(tools, toolsList);
}

// Selecting the education container element from the DOM
const educationsContainer = document.querySelector(".education-container");

/**
 * Generates and appends education details to the appropriate column in the education container.
 * @param {Array} educations - An array of education objects containing logo, institution, and programs attributes.
 */
const showOnly = [
    "UASD", "MESCYT", "ITLA", "Harvard", "Google Activate",
    "CISCO", "freeCodeCamp", "UTECO", "Microsoft Certified Educator",
    "Oracle", "EF SET", "Aprende", "LinkedIn Learning", "SoloLearn"
];
const filteredEducations = educations.filter(inst => showOnly.includes(inst.institution));

if(typeof educations !== "undefined" && document.querySelector(".education-column")) {
    filteredEducations.forEach((item, index) => {
        // Determine the column to which the education details will be appended based on the index.
        const column = index < 7 ? document.querySelector(".education-column:first-child") : document.querySelector(".education-column:last-child");
        // Create elements for the education details.
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const img = document.createElement("img");
        const title = document.createElement("span");
        const content = document.createElement("div");

        // Set attributes and content for the created elements.
        img.src = `../assets/logos/${item.logo}`;
        img.alt = item.institution;
        title.className = "summary-title";
        title.textContent = item.institution;
        content.className = "details-content";

        // Generate certificate paragraphs and append them to the content div.
        item.certificates.forEach(cert => {
            const p = document.createElement("p");
            p.textContent = `● ${cert.name}`;
            p.classList.add("program");

            p.addEventListener("click", () => {;
                openModal(cert.name, cert.image, item.logo, item.institution);
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
}

// Selecting the education container element from the DOM
const certificateContainer = document.querySelector(".container-education");

/**
 * Generate and add the certificates to the corresponding education container.
 * @param {Array} educations - An array of education objects containing logo, institution, and programs attributes.
 */
if(typeof educations !== "undefined" && document.querySelector(".container-education")) {
    educations.forEach(item => {
        // Create the institution section
        const section = document.createElement("section");
        section.classList.add("education");

        // Name of the institution
        const title = document.createElement("h2");
        title.classList.add("institution-title");

        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");

        const logo = document.createElement("img");
        logo.src = `../assets/logos/${item.logo}`;
        logo.alt = item.institution;
        logo.classList.add("institution-logo");

        const spanTitle = document.createElement("span");
        spanTitle.textContent = item.institution;

        titleContainer.appendChild(logo);
        titleContainer.appendChild(spanTitle);

        title.appendChild(titleContainer);
        section.appendChild(title);

        // Certificate container
        const institutionDiv = document.createElement("div");
        institutionDiv.classList.add("institution");

        // Explore the programs of that institution
        item.certificates.forEach(cert => {
            const certificationDiv = document.createElement("div");
            certificationDiv.classList.add("certification");

            // Certificate image
            const certificateDiv = document.createElement("div");
            certificateDiv.classList.add("certificate");

            const certImg = document.createElement("img");
            //const imageName = certificates[program];
            certImg.src = `../assets/education/${item.institution}/${cert.image}`;
            certImg.alt = cert.name;
            certificateDiv.appendChild(certImg);

            // Nombre del certificado
            const certificateBox = document.createElement("div");
            certificateBox.classList.add("certificate-box");

            const programTitle = document.createElement("h2");
            programTitle.textContent = cert.name;
            certificateBox.appendChild(programTitle);

            // Add everything inside .certification
            certificationDiv.appendChild(certificateDiv);
            certificationDiv.appendChild(certificateBox);

            certificationDiv.addEventListener("click", () => {
                openModal(cert.name, cert.image, item.logo, item.institution);
            });

            institutionDiv.appendChild(certificationDiv);
        });

        // Add to section
        section.appendChild(institutionDiv);
        // Add to general container
        certificateContainer.appendChild(section);
    });
}

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

function openModal(cert, image, icon, institution) {
    modalTitle.innerHTML = `<img src="../assets/logos/${icon}" alt="${institution}">${cert}`;
    modalImage.src = `../assets/education/${institution}/${image}`;
    modalImage.alt = cert;
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