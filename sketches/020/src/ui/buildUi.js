function buildUI() {
  //////////////
  // CREATE TEMPLATE WITH FONT-OPTIONS
  //////////////

  var arrayOfFonts = [];

  for (var property in fontFilenames) {
    if (fontFilenames.hasOwnProperty(property)) {
      arrayOfFonts.push("<option>" + property + "</option>");
    }
  }
  var fontOptionsHtml = arrayOfFonts.join("");

  //////////////
  // CREATE TEMPLATE WITH IMAGE-OPTIONS
  //////////////
  var arrayOfImages = [];

  for (var property in imageFilenames) {
    if (imageFilenames.hasOwnProperty(property)) {
      arrayOfImages.push("<option>" + property + "</option>");
    }
  }
  var imageOptionsHtml = arrayOfImages.join("");

  var markup = `
	<div id="gui">
		<div class="gui-group">
			<h2>Typography</h2>
			${buildTextInput("text", "Text", "Hi IN THE AGE OF AUTOMATION")}
			${buildSelect("fonts", "fonts", fontOptionsHtml)}
			${buildUISlider("fontsize", "font-Size", 0, 300, 1, State.fontSize)}
			${buildUISlider("lineheight", "line-height", 0, 2, 0.001, State.lineHeight)}
			${buildUISlider("textPosition", "text-position", -100, 900, 1, State.textY)}
		</div>

		<div class="gui-group">
		<h2>Image</h2>
			${buildImageSelectButton()}
			${buildUISlider("imgW", "width", 0, 1400, 1, State.width)}
			${buildUISlider("gridCols", "tiles", 20, 200, 1, State.gridCols)}
      ${buildUISlider("imgMaxS", "tilesize", 0.1, 12, 0.01, State.maxSize)}

		</div>

    <div class="gui-group">
		  <h2>Image</h2>
		  ${buildExportTool()}
    </div>
		<div class="gui-group">
			<h2>Get inspired	</h2>
			<button>Visit the gallery</button>

		</div>
	</div>
	`;

  $("#guiWrapper").html(markup);

  databinding();
}
