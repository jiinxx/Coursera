(function () {
  'use strict'

  angular.module('Menu')
  .controller('ItemController', ItemController);

ItemController.$inject = ['items'];
  function ItemController(items) {
    var ctrl = this;
    console.log('items:', items);
    ctrl.items = items.menu_items;
    ctrl.category = items.category.name;
  }
})();
