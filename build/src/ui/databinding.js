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

  document
    .getElementById("layerRadio")
    .querySelector("fieldset").onchange = function() {
    State.selectedLayer = document.querySelector(
      'input[name="Layer"]:checked'
    ).value;

    console.log(State.selectedLayer);
  };

  /*
 =========================================
  TYPOGRAPHY
   =========================================
   */

  // HEADLINE

  // Font-size
  document
    .getElementById("text")
    .querySelector("textarea").oninput = function() {
    // State.text = this.value.toUpperCase();
    State.headline.text = this.value.replace(/\r\n|\r|\n/g, "\n");
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
    State.headline.fontSize = parseFloat(this.value);
    document.getElementById("fontsize").querySelector(".gui-val").innerHTML =
      State.headline.fontSize;
  };

  // line-height
  document
    .getElementById("lineheight")
    .querySelector("input").oninput = function() {
    State.headline.lineHeight = parseFloat(this.value);
    document.getElementById("lineheight").querySelector(".gui-val").innerHTML =
      State.headline.lineHeight;
  };

  // TEXT
  document
    .getElementById("texttext")
    .querySelector("textarea").oninput = function() {
    // State.text = this.value.toUpperCase();
    State.text.text = this.value.replace(/\r\n|\r|\n/g, "\n");

    console.log(State.text.text);
  };

  // Font-size
  document
    .getElementById("textfontsize")
    .querySelector("input").oninput = function() {
    State.text.fontSize = parseFloat(this.value);
    document
      .getElementById("textfontsize")
      .querySelector(".gui-val").innerHTML = State.text.fontSize;
  };

  // line-height
  document
    .getElementById("textlineheight")
    .querySelector("input").oninput = function() {
    State.text.lineHeight = parseFloat(this.value);
    document
      .getElementById("textlineheight")
      .querySelector(".gui-val").innerHTML = State.text.lineHeight;
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

function download(content, fileName, contentType) {
  var theData = JSON.stringify(content);
  var a = document.createElement("a");
  var file = new Blob([theData], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
