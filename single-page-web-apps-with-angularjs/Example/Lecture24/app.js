(function () {

    angular.module('ShoppingListPromiseApp', [])
        .controller('ShoppingListController',ShoppingListController)
        .service('ShoppingListService', ShoppingListService)
        .service('WeightLossFilterService', WeightLossFilterService)

    ShoppingListController.$inject = ['ShoppingListService'];
    function ShoppingListController(ShoppingListService){
        var list = this;
        list.itemName = "";
        list.itemQuantity = "";

        list.items = function(){
            return ShoppingListService.items();
        };

        list.addItem = function () {
            ShoppingListService.addItem(list.itemName, list.itemQuantity);
        };

        list.removeItem = function (idx) {
            ShoppingListService.removeItem(idx);
        }
    }

    ShoppingListService.$inject = ['$q','WeightLossFilterService'];
    function ShoppingListService($q,WeightLossFilterService) {
        var service = this;
        var list = [];
        
        function items() {
            return list;
        }
        
        function addItem(itemName, itemQuantity) {
            var p1 = WeightLossFilterService.checkName(itemName);
            var p2 = WeightLossFilterService.checkQuantity(itemQuantity);

            $q.all(p1,p2)
                .then(function (response) {
                    var item = {
                        name : itemName,
                        quantity : itemQuantity
                    };
                    list.push(item);
                })
                .catch(function (errorResponse) {
                    console.log("");
                })
        }
        
        function removeItem(index) {
            list.splice(index,1);
        }
    }
})();