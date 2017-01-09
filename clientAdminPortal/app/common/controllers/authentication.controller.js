angular.module('AdminPortalApp.common')
    .controller('AuthenticationCtrl', function($scope, $http){
        $scope.hostname = 'http://localhost:8000/';
        $scope.authCreds = {
            uname: '',
            upass: ''
        }

        $scope.attemptLogin = function(){
            var url = $scope.hostname + 'api/user';
            $http.post(url, $scope.authCreds,
                function(data){
                    console.log('success');
                    console.log(data);
                },
                function(err){
                    console.log(err.message);
                })
        }
});