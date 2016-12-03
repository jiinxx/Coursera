(function () {
'use strict';

angular.module('Menu')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['items'];
function CategoryListController(items) {
  var ctrl = this;
  ctrl.items = items;
}

})();
