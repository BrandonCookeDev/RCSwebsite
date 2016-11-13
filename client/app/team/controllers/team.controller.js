angular.module('RCSapp.team')
    .controller('TeamCtrl', function($scope, TeamService){

    $scope.teamService = TeamService;
    $scope.playersArray = $scope.teamService.getPlayers();
    $scope.staffArray = $scope.teamService.getStaff();

    $scope.teamService.playerList = $scope.teamService.getPlayersDb();
    $scope.teamService.staffList = $scope.teamService.getStaffDb();

});