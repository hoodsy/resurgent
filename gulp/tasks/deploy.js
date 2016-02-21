'use strict';

import gulp from 'gulp';
import config from '../config';
import ghPages from 'gulp-gh-pages';

gulp.task('deploy', ['prod'], function() {

  return gulp.src(config.deploy.src)
    .pipe(ghPages());

});
