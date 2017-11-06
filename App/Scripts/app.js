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
            clientId: 'c34b49f1-2cd5-400f-83c2-37f6efa9c63b',
            extraQueryParameter: 'nux=1',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);