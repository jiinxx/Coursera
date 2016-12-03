(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
