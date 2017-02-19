
var gulp          = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    config        = require('./gulpconfig.json'),
    ngAnnotate    = require('gulp-ng-annotate'),
    less          = require('gulp-less'),
    connect       = require('gulp-connect'),
    concat        = require('gulp-concat'),
    clean         = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('js/', {read: true})
        .pipe(clean());
});

gulp.task('less', function () {
  return gulp.src(config.less.src)
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(ngAnnotate())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'))
    .pipe(connect.reload());
});

gulp.task('templates', function () {
  return gulp.src(config.templates.src)
    .pipe(templateCache('templates.js', {module: 'spotifyApp'}))
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('watch', function () {
    gulp.watch([config.templates.src], ['templates']);
    gulp.watch([config.scripts.src], ['scripts']);
    gulp.watch([config.less.src], ['less']);
});

gulp.task('default', ['clean', 'scripts', 'less', 'templates', 'connect', 'watch']);
