// This variable holds the current image
var sourceImage;

// The canvas (PGraphics-element) that holds the manipulated image
var manipulatedImage;


// Preload
function preload(){
	sourceImage = loadImage("./images/1.jpg");
}

// Setup
function setup() {
  canvas = createCanvas(400, 400);
}

// Draw

function draw() {
  background(220);
	
	// DIsplay the manipulated image
	image(sourceImage,0,0);
}


// Get a new source image
function getNewSourceImage(value){
	sourceImage = loadImage("./images/"+value, function(){
		console.log(value + " loaded");
	});
}

// Manipulate image
function manipulateImage(){
	mani
}