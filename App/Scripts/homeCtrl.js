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
        var resource = "a78605c9-bd50-46af-a8b1-166fd0b2401e";
        var tokenStored = adalService.getCachedToken(resource);
        return tokenStored
    };

}]);