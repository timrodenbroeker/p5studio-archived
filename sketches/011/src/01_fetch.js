$.getJSON('../../data/images.json', function(json) {
	allImages = json;
	console.log(allImages);
	started = true;
	buildUI();
});
