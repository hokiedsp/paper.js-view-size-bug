// http://paperjs.org/tutorials/geometry/vector-geometry/#vektor.js
// Converted to pure-javascript

// import paper from "paper/dist/paper-full.min";
// const paper = require("../vendor/paper.js/src/export.js")

paper.install(window);

// Only executed our code once the DOM is ready.
window.onload = function() {
  // Get a reference to the canvas object
  var canvas = document.querySelector("canvas.paper");
  // Create an empty project and a view for the canvas:
  paper.setup(canvas);

  var view = paper.view;
  console.log(`view.size: ${view.size.toString()}`)
  console.log(`view.viewSize: ${view.viewSize.toString()}`)
  console.log(`view.pixelRatio: ${view.pixelRatio.toString()}`)
};
