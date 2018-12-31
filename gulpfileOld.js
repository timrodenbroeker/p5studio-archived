var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();

// The folder of the current version of the application

const folderPath = "./sketches/" + folderName;

const folderPathJs = folderPath + "/src/";

const foldersToWatch = [
  folderPathJs + "ui/*.js",
  folderPathJs + "ui/components/*.js",
  folderPathJs + "*.js"
];

gulp.task("concatjs", function() {
  return gulp
    .src(foldersToWatch)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(folderPath));
});

// Static server
gulp.task("browsersync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// WATCH

gulp.task("default", function() {
  gulp.series(["concatjs", "browsersync"]);
  gulp.watch(foldersToWatch, gulp.series(["concatjs", "browsersync"]));
});
