const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile scss into css

function style() {
	// query source
	return (
		gulp
			.src('./scss/**/*.scss')
			// compile
			.pipe(sass())
			.on('error', sass.logError)
			// output
			.pipe(gulp.dest('./css'))
			// stream changes
			.pipe(browserSync.stream())
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.html').addListener('change', browserSync.reload);
	gulp.watch('./js/**/*.js').addListener('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
