'use strict';

function NavMenu() {

  return {
    restrict: 'E',
    templateUrl: 'directives/nav-menu.html'
  };

}

export default {
  name: 'navMenu',
  fn: NavMenu
};
