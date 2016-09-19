var
gulp = require('gulp'),
sass = require('gulp-sass'),
cssimport = require('gulp-cssimport'),
removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task('default', function() {
    gulp.src('cssmaterial.css')
    .pipe(cssimport({filter: /^src\//gi}))
    .pipe(sass({outputStyle:'compact'}))
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('./dist'));
});
