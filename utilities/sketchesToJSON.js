/**
 * Read the sketches-folder and generate a JSON-file.
 * The JSON-file will generate the list of skectehs in
 * index.html
 */

const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  sketchesToJSON: function() {
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

    // const folderPath = "./sketches/" + folderName;

    // const folderPathJs = folderPath + "/src/";

    // const foldersToWatch = [
    //   folderPathJs + "ui/*.js",
    //   folderPathJs + "ui/components/*.js",
    //   folderPathJs + "*.js"
    // ];

    const folderNamesStringified = JSON.stringify(onlyFolderNames);

    fs.writeFile("sketches/sketches.json", folderNamesStringified, function(
      err
    ) {
      if (err) {
        return console.log(chalk.red(err));
      }

      console.log(chalk.green("SketchList saved!"));
    });

    /* 
  Now create the index.html-file with the sketches as an HTML-list
*/
  }
};
