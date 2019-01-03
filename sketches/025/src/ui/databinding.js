function databinding() {
  /*
 =========================================
  IMAGE SELECTOR
   =========================================
   */

  document
    .getElementById("imageSelectButton")
    .querySelector("button").onclick = function() {
    ImagesOverlayDataBinding();
    document.getElementById("overlay").classList.add("visible");
  };

  /*
 =========================================
  LAYER SELECTOR
   =========================================
   */

  // Layer
  // document.getElementById('layerRadio').querySelector('fieldset').onchange = function() {
  // 	State.selectedLayer = document.querySelector('input[name="Layer"]:checked').value;
  // };

  /*
 =========================================
  TYPOGRAPHY
   =========================================
   */

  // Font-size
  document
    .getElementById("text")
    .querySelector("textarea").oninput = function() {
    // State.text = this.value.toUpperCase();
    State.text = this.value;
    console.log(State.text);
  };

  // Font
  document
    .getElementById("fonts")
    .querySelector("select").onchange = function() {
    var newFont = this.options[this.selectedIndex].value;
    font = loadFont("../../assets/fonts/" + newFont);
    console.log(newFont);
  };

  // Font-size
  document
    .getElementById("fontsize")
    .querySelector("input").oninput = function() {
    State.fontSize = parseFloat(this.value);
    document.getElementById("fontsize").querySelector(".gui-val").innerHTML =
      State.fontSize;
  };

  // line-height
  document
    .getElementById("lineheight")
    .querySelector("input").oninput = function() {
    State.lineHeight = parseFloat(this.value);
    document.getElementById("lineheight").querySelector(".gui-val").innerHTML =
      State.lineHeight;
  };

  // line-height
  document
    .getElementById("textPosition")
    .querySelector("input").oninput = function() {
    State.textY = parseFloat(this.value);
    document
      .getElementById("textPosition")
      .querySelector(".gui-val").innerHTML = State.textY;
  };

  /*
 =========================================
  IMAGES
   =========================================
   */

  // document.getElementById('images').querySelector('select').onchange = function() {
  // 	var newImage = this.options[this.selectedIndex].value;
  // 	getNewSourceImage(newImage);
  // 	console.log(newImage);
  // };

  // Image width

  document.getElementById("imgW").querySelector("input").oninput = function() {
    posterSizeAdjustWidth = this.value;
    posterSizeAdjust = true;
  };
  document.getElementById("imgW").querySelector("input").onchange = function() {
    State.width = parseInt(this.value);
    document.getElementById("imgW").querySelector(".gui-val").innerHTML =
      State.width;
    posterSizeAdjust = false;

    manipulateImage();
  };

  document
    .getElementById("imgMaxS")
    .querySelector("input").onchange = function() {
    State.maxSize = parseFloat(this.value);
    document.getElementById("imgMaxS").querySelector(".gui-val").innerHTML =
      State.maxSize;
    manipulateImage();
  };

  document
    .getElementById("gridCols")
    .querySelector("input").onchange = function() {
    State.gridCols = parseFloat(this.value);
    document.getElementById("gridCols").querySelector(".gui-val").innerHTML =
      State.gridCols;
    manipulateImage();
  };

  //A

  // document.getElementById("color-type").onclick = function() {
  //   this.classList.toggle("active");
  //   if (this.classList.contains("active")) {
  //     State.Colors.text = "#2103A8";
  //   } else {
  //     State.Colors.text = "#f1f1f1";
  //   }
  // };

  // document.getElementById("color-background").onclick = function() {
  //   this.classList.toggle("active");
  //   if (this.classList.contains("active")) {
  //     State.Colors.background = "#2103A8";
  //   } else {
  //     State.Colors.background = "#f1f1f1";
  //   }
  // };
  // document.getElementById("color-image").onclick = function() {
  //   this.classList.toggle("active");
  //   if (this.classList.contains("active")) {
  //     State.Colors.image = "#2103A8";
  //   } else {
  //     State.Colors.image = "#f1f1f1";
  //   }
  //   manipulateImage();
  // };
}
