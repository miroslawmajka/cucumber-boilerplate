const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', () => gulp
    .src(['**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError()))
    .once('error', err => {
        console.error('Gulp task failed:');
        console.error(err);

        process.exit(1);
    });