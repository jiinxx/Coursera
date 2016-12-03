(function () {
  'use strict';

  angular.module('Menu')
  .component('menuItems',{
    templateUrl: 'src/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });
})();
