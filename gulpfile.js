'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')
const less = require('gulp-less')
const csso = require('gulp-csso')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')

const files = [
    'static/js/*.js',
    'static/css/*.css',
    'views/**',
    'src/**'
]

gulp.task('less', () => {
    gulp.watch('static/**/*.less', (e) => {
        if (e.type === 'changed') {
            let path = e.path
            gulp.src(path)
                .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
                .pipe(less())
                .pipe(csso())
                .pipe(gulp.dest('static/css/'))
        }
    })
})

gulp.task('sync', () => {
    browserSync.create().init({
        proxy: 'localhost:4000',
        notify: false,
        files: files
    })
})

gulp.task('default', ['less', 'sync'])