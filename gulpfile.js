import { task, src } from 'gulp';
import eslint, { format, failAfterError } from 'gulp-eslint';

task('default', () => src(['**/*.js'])
    .pipe(eslint())
    .pipe(format('stylish'))
    .pipe(failAfterError()))
    .once('error', err => {
        console.error('Gulp task failed:');
        console.error(err);

        process.exit(1);
    });