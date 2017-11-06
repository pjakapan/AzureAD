'use strict';
angular.module('catApp')
.controller('homeCtrl', ['$scope', 'adalAuthenticationService','$location', function ($scope, adalService, $location) {
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
    $scope.getToken = function () {
        var resource = "c34b49f1-2cd5-400f-83c2-37f6efa9c63b";
        var tokenStored = adalService.getCachedToken(resource);
        return tokenStored
    };

}]);