function drawVisual() {
  for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      fill(palette[cSelectX][0]);
    } else {
      fill(palette[cSelectX][2]);
    }
    push();
    translate(width / 2, sliderPos.value());
    rotate(radians(sliderPhase.value() * i * 0.01));
    rect(0, i, 50 + i * 4, 20);
    pop();
  }
}
