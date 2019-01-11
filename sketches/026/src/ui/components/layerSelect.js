function buildLayerRadio() {
  var tmplt = `
		<div class="gui-wrapper" id="layerRadio">
			<div class="gui-input">
				<fieldset>
					<div>
						<input class="layer" type="radio" id="mc" name="Layer" value="IMAGE" checked>
						<label for="mc">IMAGE</label> 
					</div>
					<div>
						<input class="layer" type="radio" id="vi" name="Layer" value="HEADLINE">
						<label for="vi">HEADLINE</label>
					</div>
					<div>
						<input class="layer" type="radio" id="te" name="Layer" value="TEXT">
						<label for="te">TEXT</label>
					</div>
				</fieldset>
			</div>
		</div>
	`;

  return tmplt;
}
