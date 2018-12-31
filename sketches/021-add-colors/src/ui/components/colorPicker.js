function buildColorpicker(id, label, data) {
  var tmplt = `
<div class="gui-wrapper" id="${id}">
  <div class="gui-label">${label}</div>
  <div class="gui-input">

    <div class="colorPicker" style="background: ${data}">

    </div>

  </div>
  <div class="gui-val"></div>
</div>
`;

  return tmplt;
}
