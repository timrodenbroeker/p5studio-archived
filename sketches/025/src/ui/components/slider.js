function buildUISlider(id, label, min, max, step, initialVal) {
  var tmplt = `
  <div class="gui-wrapper" id="${id}">
    <div class="gui-label">${label}</div>
    <div class="gui-input">
      <input min="${min}" max="${max}" step="${step}" type="range" value="${initialVal}"/>
    </div>
    <div class="gui-val"></div>
  </div>
  `;

  return tmplt;
}
