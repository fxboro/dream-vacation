var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import");

gulp.task("default", function() {
  console.log("Hooray - we just lauched a gulp task");
});

gulp.task("html", function() {
  console.log("we just created an html task");
});

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("html");
  });

  gulp.task("watch", function() {
    gulp.watch("./app/assets/**/*.css", function() {
      gulp.start("styles");
    });
  });
});
