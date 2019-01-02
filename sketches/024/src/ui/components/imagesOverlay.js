// This function builds the Modal

function buildImagesOverlay() {
  var markupArray = [];

  // Fetch JSON-file which contains all the filenames of the images
  fetch("../../assets/images.json")
    .then(response => response.json())

    // Loop through the array
    // and push markup to the markup-array
    .then(json => {
      for (var i = 0; i < json.length; i++) {
        var filename = json[i];

        markupArray.push(`
				<button data-image="${filename}"><img src="../../assets/images/${filename}"></button>
			`);
      }

      // Convert thte markup-array to a string
      var imageOptionsHtml = markupArray.join("");

      // And then put the Markup into the #overlay
      $("#overlay").html(imageOptionsHtml);
    })

    .then(ImagesOverlayDataBinding());
}

// ImagesOverlayDataBinding puts the functionality to the buttons

function ImagesOverlayDataBinding() {
  var list = document.getElementById("overlay");

  console.log(list.children.length);

  for (var i = 0; i < list.children.length; i++) {
    list.getElementsByTagName("button")[i].onclick = function() {
      var newImage = this.dataset.image;

      console.log(newImage);

      getNewSourceImage(newImage);

      document.getElementById("overlay").classList.remove("visible");

      document
        .getElementById("imageSelectButton")
        .querySelector("button").innerHTML = newImage;
    };
  }
}
