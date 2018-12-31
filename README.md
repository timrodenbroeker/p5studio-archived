#p5js workspace

Working with p5.js these days is a bit difficult. Even though there's a pretty nice web-editor for the beginners out there, there are no best practices for a workflow for more complex projects yet.

This application aims to support an iterative and creative development-process as good as possible.

The p5js-workspace solves numerous problems:

- It automatically creates a list of sketch-folders from the sketches-folder
- It automatically saves all font-filenames in a JSON-file in the fonts-folder, so we are abled to use the fonts later on in our sketches
- It automatically saves all image-filenames in a JSON-file in the images-folder.
- It is based on a Gulp-process that uses Babel to transpile the Javascript
- It automatically compiles all js files from the src-folder and its subfolders to an app.js

## Scripts

```js
node app.js
```

```js
gulp;
```
