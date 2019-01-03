/**
 * The same procedure for the fonts
 */

const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  fontsToJSON: function() {
    var fontsArray = [];
    fs.readdir("assets/fonts", (err, files) => {
      files.forEach(file => {
        if (file !== ".DS_Store") {
          let fileWithoutExtension = file;
          fontsArray.push(file);
        }
      });
      // if (!fs.existsSync(dir)) {
      //   fs.mkdirSync(dir);
      // }

      fs.writeFile("assets/fonts.json", JSON.stringify(fontsArray), function(
        err
      ) {
        if (err) {
          return console.log(err);
        }
        console.log(chalk.green("FontList saved!"));
      });
    });
  }
};
