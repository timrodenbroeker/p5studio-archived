/*
	 =========================================
	 fontS
	   =========================================
	   */

fs.readdir(fontsFolder, (err, files) => {
  files.forEach(file => {
    // CLEAN UP THE DATA!

    if (file !== ".DS_Store") {
      // let fileWithoutExtension = file.substring(0, file.indexOf('.'));
      let fileWithoutExtension = file;

      fontsObj[fileWithoutExtension] = file;
    }
  });
  fontsTemp = JSON.stringify(fontsObj);
  // console.log(fontsTemp);
  const dir = "data";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile("data/fonts.json", fontsTemp, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("fontList saved!");
  });
});
