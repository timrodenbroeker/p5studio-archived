/*
 =========================================
 Branding
   =========================================
   */

function type() {
  poster.textFont(font);

  poster.textAlign(RIGHT, TOP);
  poster.rectMode(CORNER);
  poster.textSize(State.fontSize);

  poster.fill(249, 48, 17, 240);
  poster.push();
  poster.translate(State.textX, State.textY);

  var charPosX = 0;
  var charPosY = 0;

  for (var i = 0; i < State.text.length; i++) {
    var charW = poster.textWidth(State.text[i]);
    if (charPosX > posterW - 20) {
      charPosX = 0;
      charPosY += State.fontSize * State.lineHeight;
    }
    charPosX += charW;
    poster.text(State.text[i], charPosX, charPosY);
  }

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
