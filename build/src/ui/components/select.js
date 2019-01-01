function buildSelect(id, label, data) {
  var tmplt = `
	<div class="gui-wrapper" id="${id}">
		<div class="gui-label">${label}</div>
		<div class="gui-input">

			<select>

				${data}

			</select>

		</div>
		<div class="gui-val"></div>
	</div>
	`;

  return tmplt;
}
