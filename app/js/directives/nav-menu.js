'use strict';

function NavMenu() {

  return {
    restrict: 'E',
    templateUrl: 'directives/nav-menu.html',
    link: linkFn
  };

  function linkFn (scope, element) {}

}

export default {
  name: 'navMenu',
  fn: NavMenu
};
