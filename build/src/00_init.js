/*
 =========================================
 OTHER VARIABLES
   =========================================
   */

var inp,
  posterW = 586,
  posterH = 810;

var currentImage, newImage;

var imageOffsetX = 0,
  imageOffsetY = 0;

var started = false;

var imageIsLoaded = false;

var poster;
var imgCounter = 0;

var allImages = [];

var gotChanges = false;

// The PGraphics-element i'll draw on the poster
var pg;

var mouseOffsetX = 0,
  mouseOffsetY = 0,
  dragging = false,
  rollover = false;

var grid = [];
var gridItemW;

// Automated gridRows
var gridRows;
var img;
