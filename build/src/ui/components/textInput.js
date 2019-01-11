function buildTextInput(id, label, val) {
  var tmplt = `
	<div class="gui-wrapper" id="${id}">
		<div class="gui-label">${label}</div>
		<div class="gui-input">
			<textarea placeholder="Write something!" onkeyup="this.value" value="${val}" rows="3"/>
		</div>
		<div class="gui-val"></div>
	</div>
	`;

  return tmplt;
}
