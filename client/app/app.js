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
		.when('/superFamiCon', {
            templateUrl: 'app/tournaments/views/superFamiCon.html',
            controller: 'TournamentsCtrl'
        })
        .when('/bmr2', {
            templateUrl: 'app/tournaments/views/bmr2.html',
            controller: 'TournamentsCtrl'
        })
        .when('/function', {
            templateUrl: 'app/tournaments/views/function.html',
            controller: 'TournamentsCtrl'
        })
        .when('/shine2017', {
            templateUrl: 'app/tournaments/views/shine2017.html',
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
        .when('/superFamiCon', {
            templateUrl: 'app/tournaments/views/superFamiCon.html',
            controller: 'TournamentsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

app.config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
}]);