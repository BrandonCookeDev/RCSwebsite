angular.module('RCSapp.team')
    .controller('TeamCtrl', function($scope, $http, TeamService){

    $scope.teamService = TeamService;
    $scope.readyQ = {
        playersReady: false,
        staffReady: false
    };
    //$scope.playersArray = $scope.teamService.getPlayers();
    //$scope.staffArray = $scope.teamService.getStaff();

    //$scope.teamService.playerList = $scope.teamService.getPlayersDb();
    //$scope.teamService.staffList = $scope.teamService.getStaffDb();

        $scope.playersArray = [];
        $scope.staffArray = [];

        var url = 'http://138.197.24.51:8000/api/team/';
        var playerUrl = url + 'player';
        var staffUrl = url + 'staff';
        $http.get(playerUrl)
            .success(function(data){
                $scope.playersArray = data;
                $scope.readyQ.playersReady = true;
                //$scope.$apply();
            })
            .error(function(err){
                if(err) console.log(err.message);
            });

        $http.get(staffUrl)
            .success(function(data){
                $scope.staffArray = data;
                $scope.readyQ.staffReady = true;
                //$scope.$apply();
            })
            .error(function(err){
                if(err) console.log(err.message);
            });
        //$scope.$apply();

    /* LOADING ANIMATION */
    $scope.ready = false;
    angular.element(document).ready(function () {
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.readyQ.playersReady = true;
                $scope.readyQ.staffReady = true;
            })
        }, 500)
    });
});