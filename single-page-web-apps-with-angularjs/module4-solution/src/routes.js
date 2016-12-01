(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })

            .state('categories',{
              url: '/categories',
              templateUrl: 'src/data/templates/categories.template.html',
              controller: 'MenuDataController as menuList',
              resolve: {
                item: ['$stateParams', 'MenuDataService',
                  function ($stateParams, MenuDataService) {
                    return MenuDataService.getAllCategories();
                  }]
                }
            })
    }
})();
