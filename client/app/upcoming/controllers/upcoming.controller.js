angular.module('RCSapp.upcoming')
    .controller('UpcomingCtrl', function($scope, $sce, UpcomingService){
        $scope.upcomingService = UpcomingService;

        $scope.eventsArray = $scope.upcomingService.getEvents();

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

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