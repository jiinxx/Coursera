(function() {
    'use strict'

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['UserService'];

    function MyinfoController(UserService) {
        var ctrl = this;
        ctrl.currentUser = UserService.getUser();
    }
})();
