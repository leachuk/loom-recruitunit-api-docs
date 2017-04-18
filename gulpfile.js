const gulp = require('gulp');
const aglio = require('gulp-aglio');
const zip = require('gulp-zip');
const runSequence = require('run-sequence');

gulp.task('buildLambda', () => {
  return runSequence(['docs', 'copy'], 'zip');
});

gulp.task('docs', () => {
  return gulp.src('docs/*.md')
    .pipe(aglio({ themeTemplate: 'default', }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', () => {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('zip', () => {
  return gulp.src('dist/**/*')
    .pipe(zip('package.zip'))
    .pipe(gulp.dest('./'));
});