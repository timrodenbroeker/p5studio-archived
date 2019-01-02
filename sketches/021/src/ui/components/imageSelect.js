function buildImageSelectButton() {
  var tmplt = `
		<div class="gui-wrapper" id="imageSelectButton">
			<div class="gui-label">File</div>
			<div class="gui-input">
				<button onclick="openModal()">Select image</button>
			</div>
			<div class="gui-val"></div>
		</div>
	`;

  return tmplt;
}
