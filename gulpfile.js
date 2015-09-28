var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
  livereload.listen();
  nodemon({
    script: 'index.js',
    watch: ['**/*.js', 'views/**/*.jade'],
    ext: 'json js jade',
    ignore: ['node_modules/**/*'],
  })
  .on('restart', function(e) {
    setTimeout(livereload.changed, 500); // A stupid magic number because nodemon doesn't let us know when the server is actually ready.
  });
});
