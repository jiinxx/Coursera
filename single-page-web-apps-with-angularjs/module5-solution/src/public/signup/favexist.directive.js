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
                model.$asyncValidators.favouriteExists = function(modelValue, viewValue) {
                    if (viewValue) {
                        return MenuService.getMenuItem(viewValue)
                            .then(function(response) {
                                return true;
                            }, function() {
                                return $q.reject('Selected dish does not exists');
                            });
                    } else {
                        return $q.resolve('No favourite selected');
                    }
                };
            }
        }
    }
})();;
