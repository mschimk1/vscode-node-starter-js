const gulp = require('gulp'),
      mocha = require('gulp-mocha');

//run mocha tests in the ./tests folder
gulp.task('test', function () {
    return gulp.src('./tests/test*.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({reporter: 'spec', ui: 'bdd', timeout: 500}))
        .once('error', function () {
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
});