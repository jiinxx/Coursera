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
              templateUrl: 'src/menu/templates/categories.template.html',
              controller: 'CategoryListController as ctrl',
              resolve: {
                items: ['MenuDataService',
                  function (MenuDataService) {
                    var result =  MenuDataService.getAllCategories();
                    console.log('result: ',result);
                    return result;
                  }]
                }
            })

            .state('items',{
              url: '/items/{category}',
              templateUrl: 'src/menu/templates/items.template.html',
              controller: 'ItemController as ctrl',
              resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.category);
                }]
              }
            })
    }
})();
