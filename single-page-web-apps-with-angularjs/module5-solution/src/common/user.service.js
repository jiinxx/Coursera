(function() {
    'use strict'

    angular.module('common')

    .service('UserService', UserService);

    function UserService() {
        var ctrl = this;

        ctrl.setUser = function(user) {
            ctrl.user = user;
        };

        ctrl.getUser = function() {
            return ctrl.user;
        }
    }
})();
