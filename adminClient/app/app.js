var app = angular.module('AdminPortalApp',
    ['ngRoute',
        'AdminPortalApp.home',
        'AdminPortalApp.event',
        'AdminPortalApp.team',
        'AdminPortalApp.common']);

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
        .when('/team', {
            temaplateUrl: 'app/team/views/team.html',
            controller: 'TeamController'
        })
        .otherwise({redirectTo: '/'});
}]);