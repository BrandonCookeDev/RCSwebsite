angular.module('RCSapp.team')
    .controller('TeamCtrl', function($scope, TeamService){

    $scope.teamService = TeamService;
    $scope.playersArray = null;//$scope.teamService.getPlayers();
    $scope.staffArray = null;//$scope.teamService.getStaff();

    $scope.p = $scope.teamService.getPlayersDb();
    $scope.s = $scope.teamService.getStaffDb();


    /* LOADING ANIMATION */
    $scope.ready = false;
    angular.element(document).ready(function () {
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.playersArray = $scope.p;
                $scope.staffArray = $scope.s;
                $scope.ready = true;
            })
        }, 1000)
    });
});