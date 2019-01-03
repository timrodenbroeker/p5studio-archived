// Convert font-filenames to JSON
var a = require("./utilities/fontsToJSON");
a.fontsToJSON();

// Convert image-filenames to JSON
var b = require("./utilities/imagesToJSON");
b.imagesToJSON();

// Scan the sketches-folder and create index.html
var c = require("./utilities/sketchesToJSON");
c.sketchesToJSON();
// Scan the sketches-folder and create index.html
setTimeout(function() {
  var d = require("./utilities/buildHTML");
  d.buildHTML();
}, 500);
