/*
 =========================================
 Keyboard
   =========================================
   */

var imgCounter = 0;

document.onkeyup = function(e) {
  // SAVE IMAGE WITH S

  if (e.keyCode == 192) {
    save("out" + imgCounter + ".jpg");
    imgCounter += 1;
  }

  if (e.keyCode == 27) {
    document.getElementById("overlay").classList.remove("visible");
  }
};

/*
 =========================================
 Mouse
   =========================================
   */

function mousePressed() {
  // Did I click on the rectangle?
  if (rollover) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    mouseOffsetX = State.imageX - mouseX;
    mouseOffsetY = State.imageY - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function mouseDragText() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.imageX = mouseX + mouseOffsetX;
    State.imageY = mouseY + mouseOffsetY;
  }
}

function mouseDragImage() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.imageX = mouseX + mouseOffsetX;
    State.imageY = mouseY + mouseOffsetY;
  }
}
