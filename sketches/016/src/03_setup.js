/*
 =========================================
 SETUP
   =========================================
   */

function setup() {
	imageMode(CENTER);
	rectMode(CENTER);

	// Create canvas
	var canvas = createCanvas(900, 900);
	canvas.parent('sketch');

	// The poster is a PGraphics-element
	poster = createGraphics(586, 810);

	manipulateImage();
	busy = false;

	// gui.js
	buildUI();

	// dust.js
	generateDust();
}

// Function to assign all values from the file-arrays to the gui-select-elements
// function to(name, seedGroup, seed, number) {
// 	this.name = name;
// 	this.seedGroup = seedGroup;
// 	this.seed = seed;
// 	}

// 	var countries = [
// 	  new to("Austria", 3, 0),
// 	  new to("Belgium", 1, 1),
// 	  new to("Bosnia & Herzogovinia", 2, 2)
// 	];

// 	var options = '';
// 	for (var i = 0; i < countries.length; i++) {
// 	   options += '<option value="'+JSON.stringify(countries[i])+'">'+countries[i].name+'</option>';
// 	}

// 	$('select').html(options);

function buildUI() {
	//////////////
	// CREATE TEMPLATE WITH FONT-OPTIONS
	//////////////

	var arrayOfFonts = [];

	for (var property in fontFilenames) {
		if (fontFilenames.hasOwnProperty(property)) {
			arrayOfFonts.push(`<option>${property}</option>`);
		}
	}
	var fontOptionsHtml = arrayOfFonts.join('');

	//////////////
	// CREATE TEMPLATE WITH IMAGE-OPTIONS
	//////////////
	var arrayOfImages = [];

	for (var property in imageFilenames) {
		if (imageFilenames.hasOwnProperty(property)) {
			arrayOfImages.push(`<option>${property}</option>`);
		}
	}
	var imageOptionsHtml = arrayOfImages.join('');

	//////////////
	// UI DESIGN
	//////////////

	/*
 =========================================
   Build Slider
   =========================================
   */

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

	/*
 =========================================
   Build textfield
   =========================================
   */

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

	/*
 =========================================
  Build Select
   =========================================
   */

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

	/*
 =========================================
  Build ColorPicker
   =========================================
   */

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

	/*
	=========================================
	Build Radio
	=========================================
	*/

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

	/*
 =========================================
  INPUT MARKUP
   =========================================
   */

	var markup = `
	<div id="gui">

	<div id="branding">
		<h1>PROGRAMMING POSTERS</h1>
	</div>
		<div class="gui-group">
			<h2>Typography</h2>
			${buildTextInput('text', 'text', 'ART IN THE AGE OF AUTOMATION')}
			${buildSelect('fonts', 'fonts', fontOptionsHtml)}
			${buildUISlider('fontsize', 'font-Size', 0, 300, 1, State.fontSize)}
			${buildUISlider('lineheight', 'line-height', 0, 2, 0.001, State.lineHeight)}
			${buildUISlider('textPosition', 'text-position', -100, 900, 1, State.textPosition)}
		</div>

		<div class="gui-group">
		<h2>Image</h2>
			${buildImageSelectButton()}
			${buildUISlider('imgW', 'width', 0, 1400, 1, State.width)}
			${buildUISlider('gridCols', 'tiles', 20, 200, 1, State.gridCols)}
			${buildUISlider('imgMaxS', 'tilesize', 0.1, 12, 0.01, State.maxSize)}
			
		</div>


		<div class="gui-group">
			<h2>Colors</h2>
				<div class="colorsWrapper">
				<div class="color-type active">
					<h4>TYPE</h4>
				</div>
				<div class="color-image active">
					<h4>IMAGE</h4>
				</div>
				<div class="color-background">
					<h4>BACK</h4>
				</div>
			</div>
		</div>
		<div class="gui-group">
			<h2>Export	</h2>
			<button>Download</button>
			<button>submit</button>
		</div>
		<div class="gui-group">
			<h2>Get inspired	</h2>
			<button>Visit the gallery</button>

		</div>
	</div>
	`;

	$('#guiWrapper').html(markup);

	/*
 =========================================
 IMAGES OVERLAY
   =========================================
   */

	var arrayOfImages = [];

	for (var property in imageFilenames) {
		if (imageFilenames.hasOwnProperty(property)) {
			arrayOfImages.push(`
				<button data-image="${property}"><img src="../../images/${property}"></button>
			`);
		}
	}
	var imageOptionsHtml = arrayOfImages.join('');

	$('#overlay').html(imageOptionsHtml);

	function selectImage() {
		document.getElementById('overlay').style.display = 'none';
	}

	/*
 =========================================
  LAYER SELECTOR
   =========================================
   */

	// Layer
	// document.getElementById('layerRadio').querySelector('fieldset').onchange = function() {
	// 	State.selectedLayer = document.querySelector('input[name="Layer"]:checked').value;
	// };

	/*
 =========================================
  TYPOGRAPHY
   =========================================
   */

	// Font-size
	document.getElementById('text').querySelector('input').oninput = function() {
		State.text = this.value.toUpperCase();
	};

	// Font
	document.getElementById('fonts').querySelector('select').onchange = function() {
		var newFont = this.options[this.selectedIndex].value;
		font = loadFont('../../fonts/' + newFont);
		console.log(newFont);
	};

	// Font-size
	document.getElementById('fontsize').querySelector('input').oninput = function() {
		State.fontSize = parseFloat(this.value);
		document.getElementById('fontsize').querySelector('.gui-val').innerHTML = State.fontSize;
	};

	// line-height
	document.getElementById('lineheight').querySelector('input').oninput = function() {
		State.lineHeight = parseFloat(this.value);
		document.getElementById('lineheight').querySelector('.gui-val').innerHTML = State.lineHeight;
	};

	// line-height
	document.getElementById('textPosition').querySelector('input').oninput = function() {
		State.textPosition = parseFloat(this.value);
		document.getElementById('textPosition').querySelector('.gui-val').innerHTML = State.textPosition;
	};

	/*
 =========================================
  IMAGES
   =========================================
   */
	// Das Overlay-Toggle
	document.getElementById('imageSelectButton').querySelector('button').onclick = function() {
		document.getElementById('overlay').classList.add('visible');
	};

	// Jedes einzelne Bild
	var list = document.getElementById('overlay');

	for (var i = 0; i < list.children.length; i++) {
		list.getElementsByTagName('button')[i].onclick = function() {
			var newImage = this.dataset.image;

			console.log(newImage);

			getNewSourceImage(newImage);

			document.getElementById('overlay').classList.remove('visible');

			document.getElementById('imageSelectButton').querySelector('button').innerHTML = newImage;
		};
	}

	// document.getElementById('images').querySelector('select').onchange = function() {
	// 	var newImage = this.options[this.selectedIndex].value;
	// 	getNewSourceImage(newImage);
	// 	console.log(newImage);
	// };

	// Image width

	document.getElementById('imgW').querySelector('input').oninput = function() {
		posterSizeAdjustWidth = this.value;
		posterSizeAdjust = true;
	};
	document.getElementById('imgW').querySelector('input').onchange = function() {
		State.width = parseInt(this.value);
		document.getElementById('imgW').querySelector('.gui-val').innerHTML = State.width;
		posterSizeAdjust = false;

		manipulateImage();
	};

	document.getElementById('imgMaxS').querySelector('input').onchange = function() {
		State.maxSize = parseFloat(this.value);
		document.getElementById('imgMaxS').querySelector('.gui-val').innerHTML = State.maxSize;
		manipulateImage();
	};

	document.getElementById('gridCols').querySelector('input').onchange = function() {
		State.gridCols = parseFloat(this.value);
		document.getElementById('gridCols').querySelector('.gui-val').innerHTML = State.gridCols;
		manipulateImage();
	};
}
