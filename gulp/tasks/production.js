'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', function(cb) {

  global.isProd = true;

  runSequence(
    // 'clean',
    [
      'styles',
      'images',
      'fonts',
      'views',
      'browserify'
    ],
    'gzip',
  cb);

});
