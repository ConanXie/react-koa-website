'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')
const less = require('gulp-less')
const csso = require('gulp-csso')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

const files = [
  'static/js/*.js',
  'static/css/*.css',
  'views/**',
  'src/**'
]

gulp.task('less', () => {
  gulp.watch('static/**/*.less', (e) => {
    if (e.type === 'changed') {
      // let path = e.path
      gulp.src('static/less/default.less')
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
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

/**
 * 压缩js，转es2015
 */
// require('babel-polyfill')
require('babel-core/register')({
  presets: ['es2015']
})

gulp.task('script', () => {
  gulp.src('static/bundle.js')
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015'] }))
    // .pipe(uglify({ mangle: false }))
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('./static'))
})