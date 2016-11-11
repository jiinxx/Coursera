(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.lunchList = "";
    $scope.result = "";
    $scope.class = "alert-info";
    $scope.hide = true;

    $scope.checkLunch= function(){
      if($scope.lunchList.length == 0){
        alert("Please enter data first","alert-info")
        return;
      }

      var listLenght = $scope.lunchList.split(',');
      if(listLenght.length > 3){
          alert("To much","alert-danger")
      }else{
          alert("Enjoy!","alert-success")
      }
    }

    $scope.clear = function(){
      $scope.hide = true;
    }

    function alert(msg, severity) {
      $scope.result = msg;
      $scope.class = severity;
      $scope.hide = false;
    }

  });

})();
