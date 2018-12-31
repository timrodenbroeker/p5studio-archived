// PREPATE THE DATA
const fs = require("fs");
eval(fs.readFileSync("prepareData.js") + "");

// GULP
// Define the foldername of the sketch to be used
const folderName = "020";

const folderPath = "./sketches/" + folderName;

const folderPathJs = folderPath + "/src/";

const foldersToWatch = [
  folderPathJs + "ui/*.js",
  folderPathJs + "ui/components/*.js",
  folderPathJs + "*.js"
];

// Imports

const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

// Tasks

function reload(done) {
  browserSync.reload();
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

function scripts() {
  return gulp
    .src(folderPathJs + "/**/*.js")
    .pipe(concat("app.js"))
    .pipe(
      babel({
        presets: ["minify"],
        comments: false
      })
    )
    .pipe(gulp.dest(folderPath));
}

// Watch files
function watchFiles() {
  gulp.watch(foldersToWatch, gulp.parallel(scripts, reload));
}

exports.default = gulp.series(scripts, serve, watchFiles);
