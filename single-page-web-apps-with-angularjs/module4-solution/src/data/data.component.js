(function () {
'use strict';

angular.module('MenuApp')
.component('menuList', {
  templateUrl: 'src/data/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
