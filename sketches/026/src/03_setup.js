/*
 =========================================
 SETUP
   =========================================
   */

function setup() {
  imageMode(CENTER);
  rectMode(CENTER);

  // Create canvas
  var canvas = createCanvas(900, 900);
  canvas.parent("sketch");

  // The poster is a PGraphics-element
  poster = createGraphics(586, 810);

  manipulateImage();
  busy = false;

  // gui.js
  buildUI();

  // dust.js
  generateDust();

  // dropzone = select("#dropzone");
  // dropzone.dragOver(dropZoneDragOver);
  // dropzone.dragLeave(dropZoneDragLeave);
  // dropzone.drop(receiveImage);

  document.getElementById("intro").classList.remove("visible");
}

// function dropZoneDragOver() {
//   console.log("drag Over");
//   dropzone.style("background", "#222222");
// }

// function dropZoneDragLeave() {
//   console.log("drag leave");
//   dropzone.style("background", "white");
// }

// function dropZoneDropped() {
//   console.log("dropped");
//   dropzone.style("background", "white");
// }
