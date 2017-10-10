﻿'use strict';
angular.module('catApp')
.factory('catListSvc', ['$http', function ($http) { 
    var apiUrl = 'https://tgtapidemo.azure-api.net/tun/login';
    return {
        getItems : function(){
            return $http.get(apiUrl + '/login');
        },
        getItem : function(id){
            return $http.get(apiUrl + '/api/CatList/' + id);
        },
        postItem : function(item){
            return $http.post(apiUrl + '/api/CatList/',item);
        },
        putItem : function(item){
            return $http.put(apiUrl + '/api/CatList/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiUrl + '/api/CatList/' + id
            });
        }
    };
}]);