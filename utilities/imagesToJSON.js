/**
 * Generate a JSON-file containing an array of all images
 * stored in the image-folder.
 */

const fs = require("fs");

module.exports = {
  imagesToJSON: function() {
    var imagesArray = [];
    fs.readdir("assets/images", (err, files) => {
      files.forEach(file => {
        if (file !== ".DS_Store") {
          let fileWithoutExtension = file;
          imagesArray.push(file);
        }
      });
      // if (!fs.existsSync(dir)) {
      //   fs.mkdirSync(dir);
      // }

      fs.writeFile("assets/images.json", JSON.stringify(imagesArray), function(
        err
      ) {
        if (err) {
          return console.log(err);
        }
        console.log("ImageList saved!");
      });
    });
  }
};
