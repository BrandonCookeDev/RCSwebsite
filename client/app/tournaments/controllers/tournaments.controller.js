angular.module('RCSapp.tournaments')
    .controller('TournamentsCtrl', function($scope){

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

