angular.module('RCSapp.upcoming')
    .controller('UpcomingCtrl', function($scope, $sce, UpcomingService){
        $scope.upcomingService = UpcomingService;

        $scope.eventsArray = $scope.upcomingService.getEvents();

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

        $scope.getGoogleMapsSrc = function(address){
            return $sce.trustAsResourceUrl(
                "https://www.google.com/maps/embed/v1/place?q=" + address + "&key=AIzaSyBUOr4Rw-mWbSvk02V1gUghQlLm7ox_1LM"
            )
        }

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