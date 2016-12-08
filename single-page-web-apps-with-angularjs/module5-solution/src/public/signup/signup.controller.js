(function() {

    angular.module('public')

    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'UserService'];

    function SignupController(MenuService, UserService) {
        var ctrl = this;

        ctrl.submit = function() {
            console.log("submit: " + ctrl.user.favourite);
            UserService.setUser(ctrl.user);
            console.log(UserService.getUser());
        }
    }
})();
