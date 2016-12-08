(function() {
    'use strict'

    angular.module('common')

    .service('UserService', UserService);

    function UserService() {
        var ctrl = this;
        // ctrl.user = {
        //     firstname: 'aaaa',
        //     lastname: 'bbbb',
        //     email: 'a@b',
        //     phone: '123-123-1234',
        //     favourite: 'A1'
        // }

        ctrl.setUser = function(user) {
            ctrl.user = user;
        };

        ctrl.getUser = function() {
            return ctrl.user;
        }
    }
})();
