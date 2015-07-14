var gulp = require("gulp"),
    browserSync = require("browser-sync");

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
gulp.task('default', ['server', 'watch']);
