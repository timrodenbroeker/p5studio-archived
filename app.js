/*
 =========================================
 THE FILE TO SCAN ALL FOLDERS AND SAVE THE FILENAMES OF THE IMAGES TO A JSON-FILE
   =========================================
   */

const testFolder = './images/';
const fs = require('fs');

let arr = [];
let myJsonString;

/*
 =========================================
 Read Directory
   =========================================
   */

fs.readdir(testFolder, (err, files) => {
	files.forEach(file => {
		arr.push(file);
	});
	myJsonString = JSON.stringify(arr);
	console.log(myJsonString);
	const dir = 'data';

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	fs.writeFile('data/images.json', myJsonString, function(err) {
		if (err) {
			return console.log(err);
		}

		console.log('The file was saved!');
	});
});
