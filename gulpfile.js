var gulp = require('gulp'),
  less = require('gulp-less'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  htmlmin = require('gulp-htmlmin'),//压缩html
  cheerio = require('gulp-cheerio'),//合并html,js,css
  gulpif = require('gulp-if'),
  ngAnnotate = require('gulp-ng-annotate');//用于ng的压缩

gulp.task('styleapp', function () {
  return gulp.src(['src/lib/bootstrap-3.3.4-dist/*.css', 'src/style/totoro/*.css'], { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('app.css'))
    // .pipe(gulp.dest('dist/dev'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/style'))
});

// gulp.task('styleapp', function () {
//   return gulp.src('src/style/totoro/*.css', { style: 'expanded' })
//     .pipe(autoprefixer('last 2 version'))
//     .pipe(concat('app.css'))
//     // .pipe(gulp.dest('dist/dev'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(cssnano())
//     .pipe(gulp.dest('dist/style'))
// });

gulp.task('scriptlib', function () {
  return gulp.src(['src/lib/*.js', 'src/lib/bootstrap-3.3.4-dist/*.js'])
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('lib.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script'))
});

gulp.task('scriptapp', function () {
  return gulp.src('src/script/*.js')
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    // .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif('*.js', ngAnnotate()))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/script'))
});

gulp.task('images', function () {
  return gulp.src('src/img/qrcode-website.png')
    // .pipe(imagemin({
    //   optimizationLevel: 3,
    //   progressive: true,
    //   interlaced: true
    // }))
    .pipe(gulp.dest('dist/image'))
});
gulp.task('html', function () {
  var options = {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
  };
  gulp.src('src/index.html')
    // .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'));
});
gulp.task('clean', function () {
  return del('dist/*');
});

gulp.task('style', function () {
  gulp.start('styleapp');
});

gulp.task('script', function () {
  gulp.start('scriptlib', 'scriptapp');
});

gulp.task('default', function () {
  gulp.start('clean', 'style', 'script', 'images', 'html');
});
// gulp.task('watch', function () {
//   gulp.watch('src/style/*.css', ['styles']);
//   gulp.watch('js/*.js', ['scripts']);
//   gulp.watch('image/*', ['images']);
//   livereload.listen();
//   gulp.watch(['dist/**']).on('change', livereload.changed);
// });