(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http', '$q'];
  function MenuDataService($http, $q) {
    var service = this;

    service.getAllCategories = function() {
      return $q(function(resolve, reject) {
        var result = $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/categories.json")
          });
          result.then(function(response){
            resolve(response.data)
          }, function() {
            reject('Categorylist fetch failed');
          })
     });
    };

    service.getItemsForCategory = function(categoryShortName){
      return $q(function(resolve, reject) {
        var result = $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
          });
          result.then(function(response){
            resolve(response.data)
          }, function() {
            reject('Categorylist fetch failed');
          })
     });
    };

  };
})();
