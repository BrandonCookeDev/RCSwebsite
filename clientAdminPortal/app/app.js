var app = angular.module('AdminPortalApp',
    ['ngRoute',
        'AdminPortalApp.home',
        'AdminPortalApp.event']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/home/views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/newEvent', {
            templateUrl: 'app/event/views/newEventForm.html',
            controller: 'NewEventCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);