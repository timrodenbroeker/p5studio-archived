/*
 =========================================
 Typography
   =========================================
   */

function headline() {
  poster.textAlign(LEFT, TOP);
  poster.rectMode(CORNER);

  // Headline
  poster.textFont(font);
  poster.textSize(State.headline.fontSize);
  poster.textLeading(State.headline.lineHeight * State.headline.fontSize);
  poster.fill(State.Colors.text);
  poster.push();
  poster.translate(State.headline.textX, State.headline.textY);
  poster.text(State.headline.text, 0, 0);
  poster.pop();

  // Text
  poster.textFont(metaFont);
  poster.textSize(State.text.fontSize);
  poster.textLeading(State.text.lineHeight * State.text.fontSize);
  poster.fill(State.Colors.text);
  poster.push();
  poster.translate(State.text.textX, State.text.textY);
  poster.text(State.text.text, 0, 0);
  poster.pop();
}

/*
 =========================================
 MetaInfos
   =========================================
   */

// function type2() {
//   poster.textFont(metaFont);
//   poster.textAlign(CENTER, TOP);
//   poster.fill(State.Colors.image);
//   poster.textSize(11);
//   poster.push();
//   poster.translate(State.metaInfosX, State.metaInfosY);

//   // poster.text('Programming Posters', 0, 0);
//   // poster.text('April 17th - 21th 2019', 0, 0 + 16);
//   poster.text("www.timrodenbroeker.de", posterW / 2, 0 + 32);
//   poster.pop();
// }
