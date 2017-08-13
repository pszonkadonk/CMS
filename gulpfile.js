const gulp = require("gulp");
const gulpWatch = require("gulp");
const concatenate = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const autoPrefix = require("gulp-autoprefixer");
const gulpSASS = require("gulp-sass");
const babel = require("gulp-babel");

const cssFiles = "./public/css/source/**/*.css"
const sassFiles = "./public/css/source/sass/*.sass"
const jsxFiles = ["./app_source/components/**/*.js","./app_source/initializer.js"]
const vendorFiles = ["./public/js/vendor/jquery.min.js", "./public/js/vendor/bootstrap.min.js","./public/js/vendor/popper.min.js", "./public/js/vendor/react.min.js", "./public/js/vendor/react-dom.min.js"];


gulp.task("sass", () => {
    console.log("I ran")
    gulp
        .src(sassFiles)
        .pipe(gulpSASS())
        .pipe(concatenate("styles-from-sass.min.css")) // your sass compiled into one file
        .pipe(autoPrefix())
        .pipe(cleanCSS())
        .pipe(gulp.dest("./public/css"));
});


gulp.task("css", () => {
    gulp
        .src(cssFiles)
        .pipe(concatenate("styles.min.css")) // your css compiled into one file
        .pipe(autoPrefix())
        .pipe(cleanCSS())
        .pipe(gulp.dest("./public/css"))
});

gulp.task("jsx", () => {
    gulp
        .src(jsxFiles)
        .pipe(babel({
            presets: ["babel-preset-es2015", "babel-preset-react"]
        }))
        .pipe(concatenate("components.js"))
        .pipe(gulp.dest("./public/js"))
});

gulp.task("vendor", () => {
    return gulp
        .src(vendorFiles)
        .pipe(concatenate("vendor.min.js")) //concatenate all vendor js files into one
        .pipe(gulp.dest("./public/js/"));
});

gulp.task("watch", () => {
    gulp.watch(cssFiles, ["css"]);
    gulp.watch(sassFiles, ["sass"]);
    gulp.watch(jsxFiles, ["jsx"]);
});

gulp.task("default", ["sass", "css", "jsx", "vendor", "watch"]);