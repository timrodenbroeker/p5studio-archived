function buildLayerRadio() {
  var tmplt = `
		<div class="gui-wrapper" id="layerRadio">
			<div class="gui-input">
				<fieldset>
					<input type="radio" id="mc" name="Layer" value="Image" checked>
					<label for="mc"> Image</label> 
					<input type="radio" id="vi" name="Layer" value="Typography">
					<label for="vi"> Typography</label>
				</fieldset>
			</div>
		</div>
	`;

  return tmplt;
}
