/*
 =========================================
 THE FILE TO SCAN ALL FOLDERS AND SAVE THE FILENAMES OF THE IMAGES TO A JSON-FILE
   =========================================
   */

const imagesFolder = "./images/";
const fontsFolder = "./fonts/";

let imagesObj = {};
let imagesTemp;

let fontsObj = {};
let fontsTemp;

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
/*
	 =========================================
	 get list of sketches and write in the index html file as a list of links
	   =========================================
	   */
// function getDirectories(path) {
//   return fs.readdirSync(path).filter(function(file) {
//     return fs.statSync(path + "/" + file).isDirectory();
//   });
// }

// var dirs = getDirectories("sketches");
// console.log(dirs);

/*
	 =========================================
	 GULP
	   =========================================
	   */
