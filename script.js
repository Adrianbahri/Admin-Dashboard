// Data proyek
const projects = [
    {
    name: "Landing Page",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. Nam dapibus ante et neque accumsan dictum. Sed vel rhoncus lorem. Curabitur a dolor rhoncus ligula vestibulum euismod. Donec non elit tempus, fringilla nisl non, ultrices nunc.",
    github: "https://github.com/username/landing-page",
    preview: "https://example.com/landing-page",
},
{
    name: "Landing Page",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. Nam dapibus ante et neque accumsan dictum. Sed vel rhoncus lorem. Curabitur a dolor rhoncus ligula vestibulum euismod. Donec non elit tempus, fringilla nisl non, ultrices nunc.",
    github: "https://github.com/username/landing-page",
    preview: "https://example.com/landing-page",
},    {
    name: "Landing Page",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. Nam dapibus ante et neque accumsan dictum. Sed vel rhoncus lorem. Curabitur a dolor rhoncus ligula vestibulum euismod. Donec non elit tempus, fringilla nisl non, ultrices nunc.",
    github: "https://github.com/username/landing-page",
    preview: "https://example.com/landing-page",
},    {
    name: "Landing Page",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. Nam dapibus ante et neque accumsan dictum. Sed vel rhoncus lorem. Curabitur a dolor rhoncus ligula vestibulum euismod. Donec non elit tempus, fringilla nisl non, ultrices nunc.",
    github: "https://github.com/username/landing-page",
    preview: "https://example.com/landing-page",
},
{
    name: "Landing Page",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. Nam dapibus ante et neque accumsan dictum. Sed vel rhoncus lorem. Curabitur a dolor rhoncus ligula vestibulum euismod. Donec non elit tempus, fringilla nisl non, ultrices nunc.",
    github: "https://github.com/username/landing-page",
    preview: "https://example.com/landing-page",
},
{
    name: "Landing Page",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. Nam dapibus ante et neque accumsan dictum. Sed vel rhoncus lorem. Curabitur a dolor rhoncus ligula vestibulum euismod. Donec non elit tempus, fringilla nisl non, ultrices nunc.",
    github: "https://github.com/username/landing-page",
    preview: "https://example.com/landing-page",
}
];

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
    const article = document.createElement("article");
    article.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="ikon">
                    <a href="${project.github}" class="git">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" fill="#EFEFEF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
                        </a>
                    <a href="${project.preview}" class="git">
                        <svg class="icon_github" height="25px" width="25px" viewBox="0 0 32 32"><path d="M16.0018,0A16.2088,16.2088,0,0,0,0,16.4223,16.4156,16.4156,0,0,0,10.7179,31.9376c.84.2166.7114-.3966.7114-.8153v-2.846c-4.8513.5839-5.0479-2.7138-5.3732-3.2646-.6578-1.1531-2.213-1.4469-1.7482-1.9977,1.1047-.5839,2.2308.1469,3.5357,2.1262.9438,1.4359,2.7849,1.1935,3.718.9548a4.664,4.664,0,0,1,1.24-2.2327c-5.0264-.9254-7.1214-4.0762-7.1214-7.8219A7.3467,7.3467,0,0,1,7.4074,11.204a6.5675,6.5675,0,0,1,.1752-4.4067C9.66,6.6064,11.819,8.325,11.987,8.4609a15.14,15.14,0,0,1,4.0362-.5,15.1577,15.1577,0,0,1,4.0577.51c.404-.3158,2.406-1.7921,4.3365-1.6121a6.6124,6.6124,0,0,1,.1966,4.3332,7.3488,7.3488,0,0,1,1.7482,4.8584c0,3.7531-2.1093,6.9075-7.15,7.8182a4.7469,4.7469,0,0,1,1.362,3.3418v4.1313c.0286.3305,0,.6573.5363.6573A16.4082,16.4082,0,0,0,32,16.426,16.2136,16.2136,0,0,0,16.0018,0Z" /></svg>
                        </a>
                </div>
            `;
            projectContainer.appendChild(article);
});

const Annoucement = [
    {
    name: "Site Maintenance",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis.",},
{
    name: "Anjay mabar",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. ",
},    {
    name: "Alok",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est mi, mattis quis sapien non, mattis vehicula felis. ",
},


];

const AnnoucementContainer = document.getElementById("Annoucements-container");

Annoucement.forEach((annoucement) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <h3>${annoucement.name}</h3>
        <p>${annoucement.description}</p>
    `;
    AnnoucementContainer.appendChild(article);
});