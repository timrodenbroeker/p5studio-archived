/*
 =========================================
 Typography
   =========================================
   */

function type() {
  poster.textFont(font);

  poster.textAlign(LEFT, TOP);
  poster.rectMode(CORNER);
  poster.textSize(State.fontSize);
  poster.textLeading(State.lineHeight * State.fontSize);

  poster.fill(State.Colors.text);
  poster.push();
  poster.translate(State.textX, State.textY);

  var charPosX = 0;
  var charPosY = 0;

  poster.text(State.text, charPosX, charPosY);

  poster.pop();
}

/*
 =========================================
 MetaInfos
   =========================================
   */

function metaInfos() {
  poster.textFont(metaFont);
  poster.textAlign(CENTER, TOP);
  poster.fill(State.Colors.image);
  poster.textSize(11);
  poster.push();
  poster.translate(State.metaInfosX, State.metaInfosY);

  // poster.text('Programming Posters', 0, 0);
  // poster.text('April 17th - 21th 2019', 0, 0 + 16);
  poster.text("www.timrodenbroeker.de", posterW / 2, 0 + 32);
  poster.pop();
}
