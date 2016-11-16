(function () {
    'use strict';

    var shoppingList_toBuy = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        }
    ];

    var shoppingList_alreadyBought = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        }
    ];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.shoppingList_toBuy = shoppingList_toBuy;
        $scope.shoppingList_alreadyBought = shoppingList_alreadyBought;

        $scope.addToList = function () {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList_alreadyBought.push(newItem);
        };
    }

})();