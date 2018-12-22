function setup() {
  canvas = createCanvas(400, 400);
	
}

function draw() {
  background(220);
}

function getNewImage(value){
	theImage = loadImage("./images/"+value, function(){
		console.log(value + " loaded");
	});
	
	return theImage;
}

