// The goal is be to create an automated workflow for working with Sass and CoffeeScript. We want to make tasks that will:
//
// Process styles/main.scss to assets/main.css, and scripts/hello.cofee to scripts/hello.js,
// Concatenate and minify scripts/main.js and scripts/hello.js to assets/script.js,
// React when we change scripts/hello.cofee, styles/main.scss, scripts/main.js, and index.html,
// Create server and load index.html so we can see the change on each save


/* The following vars enable the plugins that have been downloaded
Example:  In this project folder (using terminal) "npm install gulp-autoprefixer --save-dev"
installed autoprefixer into the node_modules folder. Below is where the plugins are enabled
https://webdesign.tutsplus.com/tutorials/the-command-line-for-web-design-automation-with-gulp--cms-23642
*/


// load gulp plugin
var gulp = require('gulp');

//sass
//npm install gulp-sass --save-dev
var sass = require('gulp-sass');

// Autoprefixer
var autoprefixer = require('gulp-autoprefixer');

var sassSources = ['src/**/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';





// ** Task ** //

  //sass
    gulp.task('sass', function() {
      gulp.src('src/styles.scss')
      .pipe(sass({style: 'nested'}))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('secret-agent/css/'))
    });

    //watching for files (automate processing task on file saves)
    gulp.task('watch', function() {
      gulp.watch('src/**/*.scss', ['sass']);
    });


    gulp.task('default', ['sass', 'watch']);
