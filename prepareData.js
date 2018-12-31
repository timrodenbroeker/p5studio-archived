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
Read the skecthes-folder and generate a JSON-file. 
The JSON-file will generate the list of skectehs in 
index.html
*/

const source = "sketches";

const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const directories = getDirectories(source);

const onlyFolderNames = directories.map(foldername =>
  foldername.replace(source + "/", "")
);

const folderNamesStringified = JSON.stringify(onlyFolderNames);

fs.writeFile("data/sketches.json", folderNamesStringified, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("SketchList saved!");
});

/* 
  Now create the index.html-file with the sketches as an HTML-table
*/

const htmlTop = `
<!DOCTYPE html><html lang="en"><head></head><body>
  <ul>
`;
let htmlDirectoryList = [];

onlyFolderNames.map(folder =>
  htmlDirectoryList.push(`<li><a href="sketches/${folder}">${folder}</a></li>`)
);

const htmlDirectoryListPureMarkup = htmlDirectoryList.join("");

const htmlBottom = `
  </ul>
</body></html>
`;

const markup = htmlTop + htmlDirectoryListPureMarkup + htmlBottom;

// console.log(markup);

fs.writeFile("index.html", markup, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("index.html saved!");
});
