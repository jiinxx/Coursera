// as suggested in stackoverflow thread
// http: //stackoverflow.com/questions/28717378/angularjs-custom-directive-to-check-if-a-username-exists

(function() {

    'use strict'

    angular.module('public')
        .directive('favouritexist', FavouriteExist);

    FavouriteExist.$inject = ['MenuService', '$q', 'ApiPath'];

    function FavouriteExist(MenuService, $q, ApiPath) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function(scope, elm, attr, model) {
                model.$asyncValidators.favouriteExists = function() {
                    //here you should access the backend, to check if username exists
                    //and return a promise
                    console.log(model);
                    var userInput = model.$viewValue;
                    // return $http.get(ApiPath)
                    //     .then(function() {
                    //         //username exists, this means validation success
                    //         return true;
                    //     }, function() {
                    //         //username does not exist, therefore this validation fails
                    //         return $q.reject('selected username does not exists');
                    //     });
                    return MenuService.getAllMenuItems()
                        .then(function(response) {
                            //username exists, this means validation success
                            var menu_items = response.menu_items;
                            var valid = false;
                            for (var item in menu_items) {
                                if (menu_items[item].short_name === userInput) {
                                    valid = true;
                                }
                            }
                            return valid;
                        }, function() {
                            //username does not exist, therefore this validation fails
                            return $q.reject('selected username does not exists');
                        });
                };
            }
        }
    }
})();;
