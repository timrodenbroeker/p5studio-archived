function buildTextInput(id, label, val) {
  var tmplt = `
	<div class="gui-wrapper" id="${id}">
		<div class="gui-label">${label}</div>
		<div class="gui-input">
			<textarea onkeyup="this.value" value="${val}" rows="4"/>
		</div>
		<div class="gui-val"></div>
	</div>
	`;

  return tmplt;
}
