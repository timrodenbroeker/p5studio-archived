function buildImageDropZone() {
  var tmplt = `
      <div class="gui-wrapper" id="imageDropZone">
          <div class="gui-label">Custom</div>
          <div class="gui-input">
              <input type="file" onchange="loadImageFile()">
          </div>
          <div class="gui-val"></div>
      </div>
      `;

  return tmplt;
}
