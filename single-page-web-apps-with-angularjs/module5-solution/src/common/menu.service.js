(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$q', '$http', 'ApiPath'];

    function MenuService($q, $http, ApiPath) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItemsInCategory = function(category) {
            var config = {};
            if (category) {
                config.params = {
                    'category': category
                };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                return response.data;
            });
        };

        service.getAllMenuItems = function(category) {
            return $http.get(ApiPath + '/menu_items.json').then(function(response) {
                return response.data;
            });
        };

        service.getMenuItem = function(category) {
            if (category) {
                return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function(response) {
                    return response.data;
                });
            }
        }

    }



})();
