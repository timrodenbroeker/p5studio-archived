function branding() {
  output = txt + txtInput;
  textAlign(RIGHT, TOP);
  rectMode(CORNER);

  textSize(fontSize);

  lineHeight = sliderLineHeight.value();

  fill(palette[cSelectX][1]);
  push();
  translate(0, -(fontSize / 10));

  var charPosX = 0;
  var charPosY = 0;

  for (var i = 0; i < output.length; i++) {
    var charW = textWidth(output[i]);
    if (charPosX > width - 20) {
      charPosX = 0;
      charPosY += fontSize * lineHeight;
    }
    charPosX += charW;
    text(output[i], charPosX, charPosY);
  }

  pop();
}
