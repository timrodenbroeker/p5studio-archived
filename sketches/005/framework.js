var cBlue = "#2815B2";
var cWhite = "#f1f1f1";
var cBlack = "#111111";

var font1;

function setupSketch() {
  font1 = loadFont("../../fonts/smm.otf");
  createCanvas(586, 810);
  rectMode(CENTER);
}

function branding() {
  rectMode(CORNER);
  textFont(font1);
  var fontSize = 200;
  textSize(fontSize);
  textLeading(fontSize * 0.85);
  fill(cWhite);
  push();
  translate(0, -30);
  text("PROG RAMMI NGPO STERS", 0, 0, mouseX, 1000);
  console.log();
  pop();
}

document.onkeyup = function(e) {
  // SAVE IMAGE WITH S

  if (e.keyCode == 13) {
    save("outa.jpg");
  }
};
