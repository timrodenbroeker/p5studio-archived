/*
	 =========================================
	 IMAGES
	   =========================================
	   */

fs.readdir(imagesFolder, (err, files) => {
  files.forEach(file => {
    // CLEAN UP THE DATA!

    if (file !== ".DS_Store") {
      // let fileWithoutExtension = file.substring(0, file.indexOf('.'));
      let fileWithoutExtension = file;
      imagesObj[fileWithoutExtension] = file;
    }
  });
  imagesTemp = JSON.stringify(imagesObj);
  // console.log("generatesimagesTemp);

  const dir = "data";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile("data/images.json", imagesTemp, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("ImageList saved!");
  });
});
