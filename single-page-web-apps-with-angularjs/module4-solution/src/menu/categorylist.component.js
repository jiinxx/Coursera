(function () {
'use strict';

angular.module('Menu')
.component('categoryList', {
  templateUrl: 'src/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
