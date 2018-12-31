var inp,currentImage,newImage,poster,pg,gridItemW,gridRows,img,sourceImage,manipulatedImage,font,metaFont,posterW=586,posterH=810,imageOffsetX=0,imageOffsetY=0,started=!1,imageIsLoaded=!1,imgCounter=0,allImages=[],gotChanges=!1,mouseOffsetX=0,mouseOffsetY=0,dragging=!1,rollover=!1,grid=[],imageFilenames={},fontFilenames={},busy=!0;function preload(){imageFilenames=loadJSON("../../data/images.json"),fontFilenames=loadJSON("../../data/fonts.json"),sourceImage=loadImage("../../images/30.jpg"),font=loadFont("../../fonts/Cormorant-Regular.ttf"),metaFont=loadFont("../../fonts/Poppins-Bold.ttf")}function setup(){imageMode(CENTER),rectMode(CENTER);var a=createCanvas(900,900);a.parent("sketch"),poster=createGraphics(586,810),manipulateImage(),busy=!1,buildUI(),generateDust()}var State={selectedLayer:"I",text:"ART IN THE AGE OF AUTOMATION",fontSize:200,lineHeight:.9,textX:0,textY:-20,font:"Cormorant-Italic.ttf",metaInfosX:10,metaInfosY:742,image:"9.jpg",imageX:10,imageY:10,width:700,gridCols:150,maxSize:4,Colors:{background:"#ffffff",text:"#f45642",image:"#2103A8"}},imgCounter=0;document.onkeyup=function(a){192==a.keyCode&&(save("out"+imgCounter+".jpg"),imgCounter+=1),27==a.keyCode&&document.getElementById("overlay").classList.remove("visible")};function mousePressed(){rollover&&(dragging=!0,mouseOffsetX=State.imageX-mouseX,mouseOffsetY=State.imageY-mouseY)}function mouseReleased(){dragging=!1}function mouseDragText(){rollover=!!(0<mouseX&&900>mouseX&&0<mouseY&&900>mouseY),dragging&&(State.imageX=mouseX+mouseOffsetX,State.imageY=mouseY+mouseOffsetY)}function mouseDragImage(){rollover=!!(0<mouseX&&900>mouseX&&0<mouseY&&900>mouseY),dragging&&(State.imageX=mouseX+mouseOffsetX,State.imageY=mouseY+mouseOffsetY)}function type(){poster.textFont(font),poster.textAlign(RIGHT,TOP),poster.rectMode(CORNER),poster.textSize(State.fontSize),poster.fill(249,48,17,240),poster.push(),poster.translate(State.textX,State.textY);for(var a,b=0,c=0,d=0;d<State.text.length;d++)a=poster.textWidth(State.text[d]),566<b&&(b=0,c+=State.fontSize*State.lineHeight),b+=a,poster.text(State.text[d],b,c);poster.pop()}function metaInfos(){poster.textFont(metaFont),poster.textAlign(CENTER,TOP),poster.fill(State.Colors.image),poster.textSize(11),poster.push(),poster.translate(State.metaInfosX,State.metaInfosY),poster.text("www.timrodenbroeker.de",293,32),poster.pop()}function getNewSourceImage(a){busy=!0,sourceImage=loadImage("../../images/"+a,function(){console.log(a+" loaded"),manipulateImage()})}function manipulateImage(){sourceImage.resize(200,0);var a=sourceImage.width,b=sourceImage.height,c=b/a,d=parseInt(State.width),e=parseInt(State.width*c),f=d/a,g=d/State.gridCols,h=State.gridCols*c;manipulatedImage=createGraphics(d,e),manipulatedImage.noStroke(),manipulatedImage.fill(State.Colors.image);for(var i=0,j=0;j<d;j+=g)for(var k=0;k<e;k+=g)var l=sourceImage.get(parseInt(j/f),parseInt(k/f)),m=brightness(l);for(var j=0;j<d;j+=g){i++;for(var k=0;k<e;k+=g){var l=sourceImage.get(parseInt(j/f),parseInt(k/f)),m=brightness(l),n=map(m,100,0,0,State.maxSize);manipulatedImage.push(),manipulatedImage.translate(j,k),manipulatedImage.rect(0,0,n,n),manipulatedImage.pop()}}busy=!1}var posterSizeAdjust=!1,posterSizeAdjustWidth=State.width;function draw(){background("#000000"),poster.background(State.Colors.background),poster.rectMode(CORNER),poster.noStroke(),busy?(textAlign(CENTER,CENTER),fill("#ffffff"),push(),translate(width/2,height/2),textSize(33),text("loading image...",0,0),pop()):(poster.push(),poster.translate(State.imageX,State.imageY),poster.image(manipulatedImage,0,0),poster.pop(),posterSizeAdjust&&(poster.push(),poster.translate(State.imageX,State.imageY),poster.noFill(),poster.strokeWeight(6),poster.stroke("#E25B46"),poster.rectMode(CORNER),poster.rect(0,0,posterSizeAdjustWidth,posterSizeAdjustWidth),poster.pop()),type(),metaInfos(),mouseDragImage(State.imageX,State.imageY),dust(),push(),translate(width/2,height/2),image(poster,0,0),pop())}var rects=[];function generateDust(){for(var a=0;100>a;a++)rects.push({x:random(posterW),y:random(posterH),w:random(2),h:random(5)})}function dust(){poster.fill(State.Colors.background),poster.noStroke();for(var a=0;a<rects.length;a++)poster.rect(rects[a].x,rects[a].y,rects[a].w,rects[a].h)}function buildUI(){var a=[];for(var b in fontFilenames)fontFilenames.hasOwnProperty(b)&&a.push("<option>"+b+"</option>");var c=a.join(""),d=[];for(var b in imageFilenames)imageFilenames.hasOwnProperty(b)&&d.push("<option>"+b+"</option>");var e=d.join(""),f=`
	<div id="gui">
		<div class="gui-group">
			<h2>Typography</h2>
			${buildTextInput("text","Text","Hi IN THE AGE OF AUTOMATION")}
			${buildSelect("fonts","fonts",c)}
			${buildUISlider("fontsize","font-Size",0,300,1,State.fontSize)}
			${buildUISlider("lineheight","line-height",0,2,.001,State.lineHeight)}
			${buildUISlider("textPosition","text-position",-100,900,1,State.textY)}
		</div>

		<div class="gui-group">
		<h2>Image</h2>
			${buildImageSelectButton()}
			${buildUISlider("imgW","width",0,1400,1,State.width)}
			${buildUISlider("gridCols","tiles",20,200,1,State.gridCols)}
      ${buildUISlider("imgMaxS","tilesize",.1,12,.01,State.maxSize)}

		</div>

    <div class="gui-group">
		  <h2>Image</h2>
		  ${buildExportTool()}
    </div>
		<div class="gui-group">
			<h2>Get inspired	</h2>
			<button>Visit the gallery</button>

		</div>
	</div>
	`;$("#guiWrapper").html(f),databinding()}function databinding(){var a=[];for(var b in imageFilenames)imageFilenames.hasOwnProperty(b)&&a.push(`
				<button data-image="${b}"><img src="../../images/${b}"></button>
			`);var c=a.join("");$("#overlay").html(c),document.getElementById("text").querySelector("input").oninput=function(){State.text=this.value.toUpperCase()},document.getElementById("fonts").querySelector("select").onchange=function(){var a=this.options[this.selectedIndex].value;font=loadFont("../../fonts/"+a),console.log(a)},document.getElementById("fontsize").querySelector("input").oninput=function(){State.fontSize=parseFloat(this.value),document.getElementById("fontsize").querySelector(".gui-val").innerHTML=State.fontSize},document.getElementById("lineheight").querySelector("input").oninput=function(){State.lineHeight=parseFloat(this.value),document.getElementById("lineheight").querySelector(".gui-val").innerHTML=State.lineHeight},document.getElementById("textPosition").querySelector("input").oninput=function(){State.textY=parseFloat(this.value),document.getElementById("textPosition").querySelector(".gui-val").innerHTML=State.textY},document.getElementById("imageSelectButton").querySelector("button").onclick=function(){document.getElementById("overlay").classList.add("visible")};for(var d=document.getElementById("overlay"),e=0;e<d.children.length;e++)d.getElementsByTagName("button")[e].onclick=function(){var a=this.dataset.image;console.log(a),getNewSourceImage(a),document.getElementById("overlay").classList.remove("visible"),document.getElementById("imageSelectButton").querySelector("button").innerHTML=a};document.getElementById("imgW").querySelector("input").oninput=function(){posterSizeAdjustWidth=this.value,posterSizeAdjust=!0},document.getElementById("imgW").querySelector("input").onchange=function(){State.width=parseInt(this.value),document.getElementById("imgW").querySelector(".gui-val").innerHTML=State.width,posterSizeAdjust=!1,manipulateImage()},document.getElementById("imgMaxS").querySelector("input").onchange=function(){State.maxSize=parseFloat(this.value),document.getElementById("imgMaxS").querySelector(".gui-val").innerHTML=State.maxSize,manipulateImage()},document.getElementById("gridCols").querySelector("input").onchange=function(){State.gridCols=parseFloat(this.value),document.getElementById("gridCols").querySelector(".gui-val").innerHTML=State.gridCols,manipulateImage()}}function buildColorpicker(a,b,c){return`
<div class="gui-wrapper" id="${a}">
  <div class="gui-label">${b}</div>
  <div class="gui-input">

    <div class="colorPicker" style="background: ${c}">

    </div>

  </div>
  <div class="gui-val"></div>
</div>
`}function buildExportTool(){return"\t\n   \n      <button>Download</button>\n      <button>submit</button>\n   "}function buildImageSelectButton(){return"\n\t\t<div class=\"gui-wrapper\" id=\"imageSelectButton\">\n\t\t\t<div class=\"gui-label\">File</div>\n\t\t\t<div class=\"gui-input\">\n\t\t\t\t<button onclick=\"openModal()\">Select image</button>\n\t\t\t</div>\n\t\t\t<div class=\"gui-val\"></div>\n\t\t</div>\n\t"}function buildLayerRadio(){return"\n\t\t<div class=\"gui-wrapper\" id=\"layerRadio\">\n\t\t\t<div class=\"gui-input\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<input type=\"radio\" id=\"mc\" name=\"Layer\" value=\"Image\" checked>\n\t\t\t\t\t<label for=\"mc\"> Image</label> \n\t\t\t\t\t<input type=\"radio\" id=\"vi\" name=\"Layer\" value=\"Typography\">\n\t\t\t\t\t<label for=\"vi\"> Typography</label>\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\t"}function buildSelect(a,b,c){return`
	<div class="gui-wrapper" id="${a}">
		<div class="gui-label">${b}</div>
		<div class="gui-input">

			<select>

				${c}

			</select>

		</div>
		<div class="gui-val"></div>
	</div>
	`}function buildUISlider(a,b,c,d,e,f){return`
  <div class="gui-wrapper" id="${a}">
    <div class="gui-label">${b}</div>
    <div class="gui-input">
      <input min="${c}" max="${d}" step="${e}" type="range" value="${f}"/>
    </div>
    <div class="gui-val"></div>
  </div>
  `}function buildTextInput(a,b,c){return`
	<div class="gui-wrapper" id="${a}">
		<div class="gui-label">${b}</div>
		<div class="gui-input">
			<input onkeyup="this.value = this.value.toUpperCase();" value="${c}" type="text"/>
		</div>
		<div class="gui-val"></div>
	</div>
	`}