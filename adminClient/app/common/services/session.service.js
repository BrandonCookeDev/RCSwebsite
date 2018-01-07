angular.module('AdminPortalApp.common')
    .service('SessionService', function(){
        var service = {
            loggedIn: false,
            userInfo: null
        }
        return service;
    });