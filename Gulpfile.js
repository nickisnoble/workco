var Promise      = require('es6-promise').Promise;
var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//
// Create `dev` command
// ---------------------

gulp.task('dev', ['sass'], function() {

  // Start static server
  browserSync.init({
    server: { baseDir: "./" }
  });

  // Reload on changes
  gulp.watch("./assets/scss/**/*.scss", ['sass']);
  gulp.watch(["./*.html"]).on('change', browserSync.reload);
});

// Map default task to `dev`, 
// so if you only type `gulp` you're good to go
gulp.task('default', ['dev']);

// Tasks:
// ----------

// Compile sass into CSS & trigger browser reload
gulp.task('sass', function() {

  // Grab the source code
  return gulp.src("./assets/scss/**/*.scss")

    // Compile in a readable fashion for easy debugging
    .pipe(sass({ outputStyle: 'expanded' })

    // If there's an error while compiling, complain instead of crashing
    .on('error', sass.logError))

    // Once compiled, 
    // add any necessary prefixes to make the good stuff work
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))

    // Put it at root since this is a simple project
    .pipe(gulp.dest("./"))

    // Send it to the browser
    .pipe(browserSync.stream());
});