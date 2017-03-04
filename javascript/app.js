var projects = document.querySelector(".projects");
var projectsTemplate = document.getElementById("projects-template");

var source = projectsTemplate.innerHTML;
var template = Handlebars.compile(source);

var html = template(data.projects);
projects.innerHTML = html;

console.log(data.projects);
