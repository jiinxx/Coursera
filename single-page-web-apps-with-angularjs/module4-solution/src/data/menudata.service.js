(function() {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http'];
  var MenuDataService = function($http) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json");
        });
    };

    service.getItemsForCategory = function(categoryShortName){
      return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName);
        });
    };
  };
})();
