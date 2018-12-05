var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('assets/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
	return gulp.src('assets/img/**/*')
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({stream: true}))

});

gulp.task('fonts', function () {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .pipe(browserSync.reload({stream: true}))

});
gulp.task('js', function () {
    return gulp.src('assets/js/**/*')
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
	return gulp.src("assets/**/*.html")
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img', 'fonts', 'js'], function () {
	browserSync.init({
		server: "./build",
		notify: false,
		ui: {
			port: 3000
		}
    });
    gulp.watch('assets/sass/**/*.scss', ["sass"]);
    gulp.watch('assets/**/*.html' , ['html']);
	gulp.watch('assets/img/**/*', ["img"]);
    gulp.watch('assets/fonts/**/*', ["fonts"]);
    gulp.watch('assets/js/**/*', ["js"]);
});
