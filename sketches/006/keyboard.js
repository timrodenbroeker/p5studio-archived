document.onkeyup = function(e) {
  // SAVE IMAGE WITH S

  if (e.keyCode == 13) {
    save("outa.jpg");
  } else if (e.keyCode == 37) {
    console.log(cSelectX);
    nextPalette();
  }
};

function nextPalette() {
  if (cSelectX < palette.length - 1) {
    cSelectX++;
  } else {
    cSelectX = 0;
  }
}
