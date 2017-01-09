angular.module('AdminPortalApp.event')
    .controller('NewEventCtrl', function($scope, $http){
        $scope.hostname = 'http://localhost:8000/';
        $scope.event = {
            name: '',
            date: new Date(),
            addr: '',
            prereg: ''
        };

        $scope.submitNewEvent = function(){
            var url = $scope.hostname + 'api/events';
            $http.post(url, $scope.event,
                function(data){
                    alert('Successfully submitted event!');
                }),
                function(err){
                    if(err){
                        console.log(err.message);
                        return;
                    }
                }
        }
    });
