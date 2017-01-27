angular.module('RCSapp.tournaments')
    .controller('TournamentsCtrl', ['$scope', function($scope){

    //var tournament =

    $scope.getFamiConText = function(s){

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
}]);

