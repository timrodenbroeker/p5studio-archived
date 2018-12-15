function setupUI() {
  var posY = 20;

  sliderFontSize = createSlider(20, 255, 100);
  sliderFontSize.position(20, posY);

  posY += 20;

  sliderLineHeight = createSlider(0, 1.2, 1, 0.01);
  sliderLineHeight.position(20, posY);

  posY += 20;

  sliderTypePos = createSlider(0, height, 0);
  sliderTypePos.position(20, posY);

  posY += 20;

  sliderPhase = createSlider(0, 2000, 100);
  sliderPhase.position(20, posY);

  posY += 20;

  sliderPos = createSlider(0, 810, 810 / 2);
  sliderPos.position(20, posY);

  posY += 20;

  inp = createInput("");
  inp.input(myInputEvent);
  inp.position(20, posY);

  posY += 20;

  buttonPaletteNext = createButton("Prev", "sss");
  buttonPaletteNext.position(20, posY);

  buttonPalettePrev = createButton("Next");
  buttonPalettePrev.position(90, posY);
}

function myInputEvent() {
  console.log("you are typing: ", this.value());
}
