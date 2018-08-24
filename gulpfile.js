const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-csso');

gulp.task('library-materialize-css', () => gulp.src('node_modules/materialize-css/dist/**/*')
  .pipe(gulp.dest('dist/libs/materialize-css')));

gulp.task('library-jquery', () => gulp.src('node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('dist/libs')));

gulp.task('css', () => gulp.src('src/web/client.scss')
  .pipe(sass())
  .pipe(concat('client.min.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist')));

gulp.task('js', () => gulp.src('src/web/client.js')
  .pipe(uglify())
  .pipe(concat('client.min.js'))
  .pipe(gulp.dest('dist')));

gulp.task('default', ['library-materialize-css', 'library-jquery', 'css', 'js']);
