var app = angular.module('RCSapp',
    ['ngRoute', 'ui.bootstrap',
        'RCSapp.splash',
        'RCSapp.tournaments',
        'RCSapp.team',
        'RCSapp.contact']);

app.config('$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl:'app/splash/views/splash.html',
                controller: 'app/splash/controllers/splash.controller.js',
                activeTab:  'Home'
            })
            .when('/tournaments', {
                templateUrl:'app/tournaments/views/tournaments.html',
                controller: 'app/tournaments/controllers/tournaments.controller.js',
                activeTab:  'Tournaments'
            })
            .when('/contact', {
                templateUrl:'app/contact/views/contact.html',
                controller: 'app/contact/controllers/contact.controller.js',
                activeTab:  'Contact'
            })
            .when('/team', {
                templateUrl:'app/team/views/team.html',
                controller: 'app/team/controllers/team.controller.js',
                activeTab:  'Team'
            })
            .otherwise({
                redirectTo: '/'
            })
});