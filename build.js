/**
 * This is the place where the build process lives
 * It
 */

// Now: Copy an paste everything to the build-folder to keep everything synched

var ncp = require("ncp").ncp;

ncp.limit = 16;

function copypastedir(source, destination) {
  ncp(source, destination, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("done!");
  });
}

copypastedir("data", "build/data");
copypastedir("images", "build/images");
copypastedir("fonts", "build/fonts");
copypastedir("libraries", "build/libraries");
copypastedir("sketches/" + folderName, "build");

// Search and replace

const replace = require("replace-in-file");
const options = {
  //Single file
  files: ["./build/app.js", "./build/index.html "],

  //Replacement to make (string or regex)
  from: /.\.\/\.\.\//g,
  to: "./"
};

function rplacePaths() {
  replace(options)
    .then(changedFiles => {
      console.log("Modified files:", changedFiles.join(", "));
    })
    .catch(error => {
      console.error("Error occurred:", error);
    });
}

setTimeout(rplacePaths, 1000);
