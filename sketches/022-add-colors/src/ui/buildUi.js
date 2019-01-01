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
  <h1 style="color: red;">POSTERTOY</h1>
  <p>By <a target="_blank" href="https://www.timrodenbroeker.de">Tim Rodenbröker</a><br>
  Version 0.1
  </p>
  </div>
		<div class="gui-group">
			<h2>Typography</h2>
			${buildTextInput("text", "Text", "Hi IN THE AGE OF AUTOMATION")}
			${buildSelect("fonts", "Font", fontOptionsHtml)}
			${buildUISlider("fontsize", "font-Size", 0, 300, 1, State.fontSize)}
			${buildUISlider("lineheight", "line-height", 0, 2, 0.001, State.lineHeight)}
			${buildUISlider("textPosition", "text-position", -100, 900, 1, State.textY)}
		</div>

    <div class="gui-group">
    <h2>Colors</h2>
    <div class="gui-wrapper">
      <div class="gui-label">Background</div>
        <div class="gui-input">
          <div class="bgPickr"></div>
        </div>
        <div class="gui-val"></div>
      </div>
      
      <div class="gui-wrapper">
      <div class="gui-label">Text</div>
        <div class="gui-input">
          <div class="txtPickr"></div>
        </div>
        <div class="gui-val"></div>
        </div>
      <div class="gui-wrapper">
      <div class="gui-label">Image</div>
        <div class="gui-input">
          <div class="imgPickr"></div>
        </div>
        <div class="gui-val"></div>
      </div>



		</div>

		<div class="gui-group">
		<h2>Image</h2>
			${buildImageSelectButton()}
			${buildUISlider("imgW", "width", 0, 1400, 1, State.width)}
			${buildUISlider("gridCols", "tiles", 20, 200, 1, State.gridCols)}
      ${buildUISlider("imgMaxS", "tilesize", 0.1, 12, 0.01, State.maxSize)}

		</div>

    <div class="gui-group">
    <h2>Save</h2>

    <div class="gui-wrapper">
      <div class="gui-label">Export</div>
        <div class="gui-input">
         <button onclick="exportImage()">Save JPG</button>
        </div>
        <div class="gui-val"></div>
      </div>


      <div class="gui-wrapper">
      <div class="gui-label">Save</div>
        <div class="gui-input">
         <button onclick="exportImage()">Save Configuration</button>
        </div>
        <div class="gui-val"></div>
      </div>


    </div>
	</div>
	`;

  $("#guiWrapper").html(markup);

  buildImagesOverlay();
  databinding();
  createPickrs();
}
