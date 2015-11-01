'use strict';

import angular from 'angular';

// angular modules
import 'angular-ui-router';
import './templates';
import './controllers';
import './services';
import './directives';

import './animations/resurgent-parallax';
import './animations/nav-menu';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app']);
