'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var del = require('del');

gulp.task('arquivos-js', function () {
    return gulp.src('app/js/**/*.js') // Get source files with gulp.src
      //.pipe(aGulpPlugin()) // Sends it through a gulp plugin
      .pipe(gulp.dest('dist/js')) // Outputs the file in the destination folder
})

gulp.task('arquivos-html', function () {
    return gulp.src('app/html/**/*.html') // Get source files with gulp.src
      //.pipe(aGulpPlugin()) // Sends it through a gulp plugin
      .pipe(gulp.dest('dist/html')) // Outputs the file in the destination folder
})

gulp.task('clean', function () {
  console.log('Limpando dist :) ...');
  return del.sync('dist');
})

gulp.task('watch', function(){
    gulp.watch('app/js/*.js', ['arquivos-js']); 
    gulp.watch('app/html/*.html', ['arquivos-html']); 
    // Other watchers
})

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })

    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.js").on("change", reload);
  })

gulp.task('default', ['clean', 'arquivos-js', 'arquivos-html', 'watch', 'browserSync']);
