/*
 =========================================
 Generate Dust
   =========================================
   */

var rects = [];

function generateDust() {
  for (var i = 0; i < 100; i++) {
    rects.push({
      x: random(posterW),
      y: random(posterH),
      w: random(2),
      h: random(5)
    });
  }
}

/*
 =========================================
 Display Dust
   =========================================
   */

function dust() {
  poster.fill(State.Colors.background);
  poster.noStroke();
  for (var i = 0; i < rects.length; i++) {
    poster.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
  }
}
