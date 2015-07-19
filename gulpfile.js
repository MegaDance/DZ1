var gulp = require("gulp"),
    browserSync = require("browser-sync"),
    concatCss = require('gulp-concat-css'),
    notify = require("gulp-notify");
 
gulp.task('concat', function () {
  return gulp.src('/src/css/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('css/'))
    .pipe(notify("Update!"));
});

//запуск сервера
gulp.task('server', function () {
        browserSync({
        port: 9000,
        server: {
            baseDir: 'src'
        }
        });
    });

//слежение
gulp.task('watch', function () {
    gulp.watch([
        'src/*.html',
        'src/js/**/*.js',
        'src/css/**/*.css'
    ]).on('change', browserSync.reload);
});

//дефолтные задачи
gulp.task('default', ['server', 'watch', 'concat']);
