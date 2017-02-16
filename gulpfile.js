var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create()

gulp.task('default', function() {
	console.log('gulp worked - default task');
});

gulp.task('hello', function() {
	console.log('Hello world');
});

gulp.task('sass', function() {
	console.log('in');
	return gulp.src('app/stylesheets/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
})
