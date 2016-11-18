(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('ToBuyAdderController', ToBuyAdderController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .provider('ShoppingListService', ShoppingListServiceProvider)
        .config(Config);

    Config.$inject = ['ShoppingListServiceProvider'];
    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems = 10;
    }

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var list = this;
        list.items = ShoppingListService.itemsToBuy();

        list.bought = function(idx){
            ShoppingListService.buy(idx)
        }
    }

    ToBuyAdderController.$inject = ['ShoppingListService'];
    function ToBuyAdderController(ShoppingListService) {
        var adder = this;
        adder.itemName = "";
        adder.itemQuantity = "";

        adder.add = function () {
            ShoppingListService.add(adder.itemName, adder.itemQuantity);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var list = this;
        list.items = ShoppingListService.itemsAlreadyBought();

        list.return = function(idx){
            ShoppingListService.return(idx)
        }
    }

    function ShoppingListService(maxItems) {
        var service = this;

        var toBuyList = [
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
            },
            {
                name: "Toothpaste",
                quantity: "5"
            }
        ];

        var alreadyBoughtList = [

        ];

        service.itemsToBuy = function () {
            return toBuyList;
        };

        service.itemsAlreadyBought = function () {
          return alreadyBoughtList;
        };

        service.add = function (itemName, itemQuantity) {
            if(isNaN(itemQuantity)){
                throw new Error("Quantity must be numerical!");
            }

            if ((maxItems === undefined) || (maxItems !== undefined) && (toBuyList.length < maxItems)) {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                toBuyList.push(item);
            }else {
                throw new Error("Maxitem limit reached");
            }
        };

        service.buy = function (itemIndex) {
            if(itemIndex < 0 || itemIndex > toBuyList.length){
                throw new Error("No such item");
            }
            var item = toBuyList.splice(itemIndex,1);
            alreadyBoughtList.push(item[0]);
        };

        service.return = function (itemIndex) {
            if(itemIndex < 0 || itemIndex > alreadyBoughtList.length){
                throw new Error("No such item");
            }
            var item = alreadyBoughtList.splice(itemIndex, 1);
            toBuyList.push(item[0]);
        };
    }


    function ShoppingListServiceProvider() {
        var provider = this;

        provider.defaults = {
            maxItems: 5
        };

        provider.$get = function () {
            return new ShoppingListService(provider.defaults.maxItems);
        };
    }

})();