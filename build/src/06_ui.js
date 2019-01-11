/*
 =========================================
 Keyboard
   =========================================
   */

var imgCounter = 0;

function exportImage() {
  save("out" + imgCounter + ".jpg");
  imgCounter += 1;
}

document.onkeyup = function(e) {
  // SAVE IMAGE WITH S

  if (e.keyCode == 192) {
    exportImage();
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
  }

  if (State.selectedLayer == "HEADLINE") {
    mouseOffsetX = State.headline.textX - mouseX;
    mouseOffsetY = State.headline.textY - mouseY;
  } else if (State.selectedLayer == "TEXT") {
    mouseOffsetX = State.text.textX - mouseX;
    mouseOffsetY = State.text.textY - mouseY;
  } else if (State.selectedLayer == "IMAGE") {
    mouseOffsetX = State.imageX - mouseX;
    mouseOffsetY = State.imageY - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function mouseDragHeadline() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.headline.textX = mouseX + mouseOffsetX;
    State.headline.textY = mouseY + mouseOffsetY;
  }
}

function mouseDragText() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.text.textX = mouseX + mouseOffsetX;
    State.text.textY = mouseY + mouseOffsetY;
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
