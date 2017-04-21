angular.module('myapp', [])
    .controller('MyCtrl', ['$scope', 
    function($scope){
        $scope.myname = "angular variable";
    }]);