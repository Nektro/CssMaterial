var
gulp = require('gulp'),
minifyCss = require('gulp-clean-css'),
concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('src/*/*.css')
    .pipe(minifyCss())
    .pipe(concat("cssmaterial.min.css"))
    .pipe(gulp.dest(''));
});
