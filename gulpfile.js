var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var cache = require('gulp-cached');
var progeny = require('gulp-progeny');
var frontnote = require('gulp-frontnote');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var print = require('gulp-print');
var changedInPlace = require('gulp-changed-in-place');
var notify  = require('gulp-notify');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var path = {
    'scssFile' : './scss/**/*.scss',
    'scssDir' : './scss/',
    'cssDir' : './css/',
    'esFile' : './s/es/**/*.js',
    'jsDir' : './js/'
};

var babel = require('gulp-babel');

// 自動整形
gulp.task('autoForming',function(){
    return gulp.src([path.scssFile,'!./scss/foundation/**/*.scss'])
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(changedInPlace({firstPass: false}))
        //.pipe(csscomb())
        .pipe(gulp.dest(path.scssDir));
});

// sassコンパイル
gulp.task('compile',function(){
    return gulp.src([path.scssFile,'!./scss/foundation/**/*.scss'])
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(cache('sass'))
        .pipe(progeny())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.cssDir))
        .pipe(print());
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "public",
            index: "tech.html"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// src 配下の *.html, *.css ファイルが変更されたリロード。
gulp.task('sync', ['browser-sync'], function () {
    gulp.watch("./public/*.html", ['bs-reload']);
    gulp.watch("./public/css/*.css", ['bs-reload']);
    gulp.watch("./public/css/**/*.css", ['bs-reload']);
});


//watchタスク
gulp.task('default',function(){
    gulp.watch([path.scssFile,'!./scss/foundation/**/*.scss'], ['autoForming','compile']);
});
