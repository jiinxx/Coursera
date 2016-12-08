(function() {
    'use strict'

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['MenuService', 'UserService', 'ApiPath'];

    function MyinfoController(MenuService, UserService, ApiPath) {
        var ctrl = this;
        ctrl.basePath = ApiPath;
        ctrl.currentUser = UserService.getUser();

        if (ctrl.currentUser && ctrl.currentUser.favourite) {
            console.log(ctrl.currentUser.favourite);
            MenuService.getMenuItem(ctrl.currentUser.favourite)
                .then(function(response) {
                    ctrl.menuItem = response;
                })
        }
    }
})();
