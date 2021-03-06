// http://paperjs.org/tutorials/geometry/vector-geometry/#vektor.js
// Converted to pure-javascript

// import paper from "paper/dist/paper-full.min";
// const paper = require("../vendor/paper.js/src/export.js")

show_bug = true;

$div = document.querySelector("div.container");

paper.install(window);
view = paper.view;

// Only executed our code once the DOM is ready.
window.onload = function() {
  // Get a reference to the canvas object
  $canvas = document.querySelector("canvas.paper");

  if (!show_bug) {
    console.log("Set canvas to span the window before initializing paper:");
    $canvas.style.width = "100%";
    $canvas.style.height = "100%";
  }
  // Create an empty project and a view for the canvas:
  paper.setup($canvas);

  console.log("Initial view size:");
  console.log(` view.size: ${view.size.toString()}`);
  console.log(` view.viewSize: ${view.viewSize.toString()}`);
  console.log(` view.pixelRatio: ${view.pixelRatio.toString()}`);

  if (show_bug) {
    console.log("Resizing canvas by setting view.viewSize...");
    paper.view.viewSize = [$div.offsetWidth, $div.offsetHeight];
    
    console.log("New view size:");
    console.log(` view.size: ${view.size.toString()}`);
    console.log(` view.viewSize: ${view.viewSize.toString()}`);
    console.log(` view.pixelRatio: ${view.pixelRatio.toString()}`);
  }
  var text = new this.paper.PointText({
    content: "This text should be in the middle",
    point: [500, 350],
    justification: "right"
  });

  text.on("mouseenter", () => {
    text.view.element.style.cursor = "text";
  });
  text.on("mouseleave", () => {
    text.view.element.style.removeProperty("cursor");
  });

  console.log("Text position:");
  console.log(` text.point: ${text.point.toString()}`);
};
