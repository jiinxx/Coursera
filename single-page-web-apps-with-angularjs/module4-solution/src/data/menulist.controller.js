(function () {
'use strict';

angular.module('data')
.controller('MenuListController', MenuListController);


MenuListController.$inject = ['items'];
function MenuListController(items) {
  var menuList = this;
  menuList.items = items;
}

})();
