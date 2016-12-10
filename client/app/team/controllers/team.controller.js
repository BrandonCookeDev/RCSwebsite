angular.module('RCSapp.team')
    .controller('TeamCtrl', function($scope, $http, TeamService){

    $scope.teamService = TeamService;
    //$scope.playersArray = $scope.teamService.getPlayers();
    //$scope.staffArray = $scope.teamService.getStaff();

    //$scope.teamService.playerList = $scope.teamService.getPlayersDb();
    //$scope.teamService.staffList = $scope.teamService.getStaffDb();

        $scope.playersArray = [];
        $scope.staffArray = [];

        var url = 'http://localhost:8000/api/team/';
        var playerUrl = url + 'player';
        var staffUrl = url + 'staff';
        $http.get(playerUrl)
            .success(function(data){
                $scope.playersArray = data;
                //$scope.$apply();
            })
            .error(function(err){
                if(err) console.log(err.message);
            })

        $http.get(staffUrl)
            .success(function(data){
                $scope.staffArray = data;
                //$scope.$apply();
            })
            .error(function(err){
                if(err) console.log(err.message);
            })
        //$scope.$apply();

    /* LOADING ANIMATION */
    $scope.ready = false;
    angular.element(document).ready(function () {
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.ready = true;
            })
        }, 500)
    });
});