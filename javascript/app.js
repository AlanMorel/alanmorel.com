renderTemplate("projects");
renderTemplate("contacts");

function renderTemplate(template){
  var source = document.getElementById(template + "-template").innerHTML;
  var destination = document.querySelector("." + template);
  destination.innerHTML = Handlebars.compile(source)(data[template]);
}
