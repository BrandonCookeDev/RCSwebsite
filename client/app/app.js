var app = angular.module('RCSapp',
    ['ngRoute', 'ui.bootstrap',
        'RCSapp.splash',
        'RCSapp.tournaments',
        'RCSapp.team',
        'RCSapp.contact',
        'RCSapp.upcoming',
        'RCSapp.common'
         ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/splash/views/splash.html',
            controller: 'SplashCtrl',
            activeTab: 'Home'
        })
        .when('/upcoming', {
            templateUrl: 'app/upcoming/views/upcoming.html',
            controller: 'UpcomingCtrl',
            activeTab: 'Upcoming'
        })
        .when('/tournaments', {
            templateUrl: 'app/tournaments/views/tournaments.html',
            controller: 'TournamentsCtrl',
            activeTab: 'Tournaments'
        })
        .when('/contact', {
            templateUrl: 'app/contact/views/contact.html',
            controller: 'ContactCtrl',
            activeTab: 'Contact'
        })
        .when('/team', {
            templateUrl: 'app/team/views/team.html',
            controller: 'TeamCtrl',
            activeTab: 'Team'
        })
        .when('/georgiaArcadian', {
            templateUrl: 'app/tournaments/views/georgiaArcadian.html',
            controller: 'TournamentsCtrl'
        })
        .when('/comingSoon', {
            templateUrl: 'app/upcoming/views/events.html',
            controller: 'UpcomingCtrl',
            activeTab: 'ComingSoon'
        })
        .when('/calendar', {
            templateUrl: 'app/upcoming/views/calendar.html',
            controller: 'UpcomingCtrl',
            activeTab: 'Calendar'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

app.config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
}]);