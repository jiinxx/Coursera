(function () {
    'use strict';

    angular.module('RestaurantSearchApp',[])
        .controller('RestaurantSearchController', RestaurantSearchController)
        .service('MenuClientService', MenuClientService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com");

    RestaurantSearchController.$inject = ['MenuClientService'];

    function RestaurantSearchController(MenuClientService) {
        var search = this;
        search.searchTerm = "";
        search.found;

        search.getDishes = function () {
            var searchMatch = [];
            if(search.searchTerm.length > 0) {
                MenuClientService.getDishes()
                    .then(function (response) {
                        var menuItems = response.data.menu_items;
                        for (var i = 0; i < menuItems.length; i++) {
                            if (menuItems[i].description.toLowerCase().indexOf(search.searchTerm.toLowerCase()) !== -1) {
                                searchMatch.push(menuItems[i]);
                            }
                        }
                        search.found = searchMatch;
                    });
            } else {
                search.found = [];
            }
        };

        search.removeItem = function (idx) {
            search.found.splice(idx, 1);
        };
    }

    MenuClientService.$inject = ['$http', 'ApiBaseUrl'];

    function MenuClientService($http, ApiBaseUrl) {
        var service = this;

        service.getDishes = function () {
            return $http({
                method: "GET",
                url: (ApiBaseUrl + "/menu_items.json")
            });
        };
    }

    function FoundItemsDirective() {
        return {
            templateUrl: 'founditems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
    }

    function FoundItemsDirectiveController() {
        var list = this;

        list.isEmpty = function () {
            return list.foundItems !== undefined && list.foundItems.length === 0;
        };
    }
})();