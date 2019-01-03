const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  buildHTML: function() {
    var markupArray = [];

    var json = require("../sketches/sketches.json");

    for (var i = 0; i < json.length; i++) {
      var folder = json[i];

      markupArray.push(`<li><a href="sketches/${folder}">${folder}</a></li>`);
    }

    htmlDirectoryListPureMarkup = markupArray.reverse().join("");

    const htmlTop = `
    <!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="./style.css" /></head><body>
      <ul>
    `;

    const htmlBottom = `
      </ul>
    </body></html>
    `;

    const markup = htmlTop + htmlDirectoryListPureMarkup + htmlBottom;

    fs.writeFile("index.html", markup, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log(chalk.blue("index.html saved!"));
    });
  }
};
