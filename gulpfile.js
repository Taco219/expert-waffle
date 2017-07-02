const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const exec = require('child_process').exec;
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const ngAnnotate = require('gulp-ng-annotate');
const minify = require('gulp-minify');
const source = require('vinyl-source-stream');
const historyFallback = require('connect-history-api-fallback');

const browserSync = require('browser-sync').create();

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, './config', "config.json");
const file = fs.readFileSync(configPath);
process.config = JSON.parse(file);

// client
gulp.task('browserify', function () {
    return browserify({entries: 'src/app/modules/main.js', debug: true})
        .transform('babelify', { presets: ["es2015"] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(ngAnnotate())
        .pipe(minify())
        .pipe(gulp.dest('./out/app/js'))
        .pipe(browserSync.stream());
});

gulp.task('pipe', function () {
    return gulp.src(['./src/app/**/*.html'], {base:"./src/app/"}).pipe(gulp.dest('./out/app', {overwrite: true}));
    // console.log('hello pipe');
});

gulp.task('browsersync', function () {
    browserSync.init({
        server: {
            baseDir: './out/app/',
            middleware: [historyFallback()],
        },
        port: process.config.clientPort
    })
});


gulp.task('log', function () {
    console.log('log')
});

gulp.task('watch-client', function () {
    gulp.watch('src/app/**/*.js', ['browserify', browserSync.reload]);
    gulp.watch('src/app/**/*.html', ['pipe', browserSync.reload])
});

gulp.task('client', ['browserify', 'pipe', 'browsersync', 'watch-client']);

// server
gulp.task('nodemon', function () {
    nodemon({
        script: "./out/server/server.js",
        watch: ["./out/server"],
        ext: 'js html',
        ignore: ["package.json", "gulpfile.js", ".gitignore"],
        verbose: true,
        nodeArgs: ['--harmony-async-await'],
        args: [process.argv[2]]
    }).on('restart', function () {
        // setTimeout(function () {
        //     browserSync.reload();
        // }, 1000);
    });
});

gulp.task('babel', function () {
    exec('babel ./src/server --out-dir ./out/server -dv --copy-files');
});

gulp.task('babel-watch', function () {
    exec('babel ./src/server --out-dir ./out/server --watch -dv --copy-files', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('server', ['babel-watch', 'nodemon']);
gulp.task('dev', ['server', 'client']);
