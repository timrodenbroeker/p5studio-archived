// This variable holds the current image
var sourceImage;

// The canvas (PGraphics-element) that holds the manipulated image
var manipulatedImage;

var busy = true;


// Preload
function preload(){
	sourceImage = loadImage("./images/1.jpg");
}

// Setup
function setup() {
	textMode(CENTER);
  canvas = createCanvas(400, 400);
}

// Draw

function draw() {
  background(220);
	
	
	if (busy){
			
		text("I AM BUSY!",width/2,height/2);
	}
	
	// Display the manipulated image
	// image(sourceImage,0,0);
}


// Get a new source image
function getNewSourceImage(value){
	sourceImage = loadImage("./images/"+value, function(){
		console.log(value + " loaded");
	});
}

// Manipulate image
function manipulateImage(){
	
	var srcÍmgW = sourceImage.width();
	var srcImgH = sourceImage.height();
	
	// assign the manipulatedImage to a new PGraphics-element
 	manipulatedImage = createGraphics(srcÍmgW,srcÍmgH);
	
	for (var y = 0; y < srcÍmgH; y++){
		
		for (var x = 0; x < srcÍmgW; x++){
			
			var thisPixel = srcImg.get(x,y);
			
			
		}
		
	}
	
	
}