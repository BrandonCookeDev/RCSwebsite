angular.module('RCSapp.upcoming')
    .controller('UpcomingCtrl', function($scope, UpcomingService){
        $scope.upcomingService = UpcomingService;

        $scope.eventsArray = $scope.upcomingService.getEvents();

        /* LOADING ANIMATION */
        $scope.ready = false;
        angular.element(document).ready(function () {
            setTimeout(function(){
                $scope.$apply(function(){
                    $scope.ready = true;
                })
            }, 1000)
        });
    });