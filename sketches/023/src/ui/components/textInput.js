function buildTextInput(id, label, val) {
  var tmplt = `
	<div class="gui-wrapper" id="${id}">
		<div class="gui-label">${label}</div>
		<div class="gui-input">
			<input onkeyup="this.value = this.value.toUpperCase();" value="${val}" type="text"/>
		</div>
		<div class="gui-val"></div>
	</div>
	`;

  return tmplt;
}
