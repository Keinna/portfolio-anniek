// Compile the Handlebars template
let projectCardTemplate;

// Load the template from the external file
const templateRequest = new XMLHttpRequest();
templateRequest.open("GET", "project-template.hbs", true);
templateRequest.onreadystatechange = function() {
    if (templateRequest.readyState === 4 && templateRequest.status === 200) {
        // Compile the template once it is loaded
        projectCardTemplate = Handlebars.compile(templateRequest.responseText);

        // Call the function to render the projects
        renderProjects();
    }
};
templateRequest.send();

// Render the projects
function renderProjects() {
    const projectsContainer = document.querySelector('[data-render-container]');

    // Render each project using the template
    projects.forEach(function(project) {
        const projectCardHTML = projectCardTemplate(project);
        projectsContainer.innerHTML += projectCardHTML;
    });
}

const projectsContainer = document.querySelector('[data-render-container]');
