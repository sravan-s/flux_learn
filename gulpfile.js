const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('compile', () => {
	return gulp.src(['src/js/componenets.js', 'src/js/app.js'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['compile']);
