const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('buildLib', () => {
	return gulp.src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/react/react.js',
            'bower_components/react/react-dom.js'])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('assets/js'));
});
gulp.task('compile', () => {
	return gulp.src(['src/js/componenets.jsx', 'src/js/app.jsx'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('default', ['buildLib', 'compile']);
