(function(){
'use strict';

angular.module("CalculateByteCode",[])

.controller("myFirstLogicalProgram", function ($scope){

      $scope.name = "";
      $scope.tvalue = 0;
      $scope.displayNum = function () {
        $scope.tvalue = updatenum($scope.name);
      };

      function updatenum(string){
        var sum = 0;
        for(var i=0; i < string.length;i ++){
          sum += string.charCodeAt(i);
        }
        return sum;
      };




});

}
)();
