(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.lunchList = "";
    $scope.result = "";

    $scope.checkLunch= function(){
      if($scope.lunchList.length == 0){
        $scope.result = "Please enter data first";
        return;
      }

      var listLenght = $scope.lunchList.split(',');
      if(listLenght.length > 3){
        $scope.result = "To much";
      }else{
        $scope.result = "Enjoy!";
      }
    }
  });

})();
