render("contacts");
render("projects");

function render(template) {
    var source = document.getElementById(template + "-template").innerHTML;
    var destination = document.querySelector("." + template);
    destination.innerHTML = Handlebars.compile(source)(data[template]);
}

var action = document.querySelector(".action");
var actions = ["collaborate", "create", "share", "build", "learn", "code", "teach", "dream"];

var i = 0;

setInterval(function() {
    action.innerHTML = actions[i];
    i = (i + 1) % actions.length;
}, 1500);

if ("loading" in HTMLImageElement.prototype) {
    document.querySelectorAll("[data-src]").forEach(image => {
        image.src = image.dataset.src;
    });
} else {
    var bLazyOptions = {
        selector: "img",
        offset: 500
    };

    var bLazy = new Blazy(bLazyOptions);
}
