'use strict';
angular.module('catApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/AzureAD/App/Views/Home.html",
    }).when("/CatList", {
        controller: "catListCtrl",
        templateUrl: "/AzureAD/App/Views/CatList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/AzureAD/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'common',
            clientId: '3e0b6cbd-4959-4d01-81bf-ce883ddabd96',
            extraQueryParameter: 'nux=1',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);