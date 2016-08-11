var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('watch', function(){
    return watch('src/scss/**/*.*', function () {
        gulp.src('src/scss/**/*.*')
            .pipe(sass())
            .pipe(gulp.dest('src/css'));
    });
});

gulp.task('default', function(){
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});