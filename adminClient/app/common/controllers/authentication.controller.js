angular.module('AdminPortalApp.common')
    .controller('AuthenticationCtrl', function($scope, $http, SessionService){
        $scope.sessionService = SessionService;

        $scope.authCreds = {
            uname: '',
            upass: ''
        };

        $scope.attemptLogin = function(){
            var url = hostname + 'api/user/login';
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
            var url = hostname + 'api/user/logout'
            $http.delete(url);
        }
});