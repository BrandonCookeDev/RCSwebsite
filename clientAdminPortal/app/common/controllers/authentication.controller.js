angular.module('AdminPortalApp.common')
    .controller('AuthenticationCtrl', function($scope, $http, SessionService){
        $scope.hostname = 'http://138.197.24.51:8000/';
        $scope.sessionService = SessionService;

        $scope.authCreds = {
            uname: '',
            upass: ''
        };

        $scope.attemptLogin = function(){
            var url = $scope.hostname + 'api/user/login';
            $http.post(url, $scope.authCreds)
                .then(function(data){
                    console.log('success');
                    $scope.sessionService.loggedIn = true;
                    $scope.sessionService.userInfo = data;
                })
                .catch(function(err){
                    console.log(err.message);
                })
        };

        $scope.logout = function(){
            var url = $scope.hostname + 'api/user/logout'
            $http.delete(url);
        }
});