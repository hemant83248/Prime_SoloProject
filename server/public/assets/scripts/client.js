
var indexApp = angular.module('indexApp', []);

indexApp.controller('RegButtonController', ['$scope', '$http', function($scope, $http){

    $scope.goToRegistration = function () {
        console.log('Registration button clicked');
            window.location.assign('http://localhost:3000/registration');
    }
}]);

