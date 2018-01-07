angular.module('AdminPortalApp.event')
    .controller('NewEventCtrl', function($scope, $http){

        $scope.events = null;

        $scope.event = {
            name: '',
            date: new Date(),
            address: '',
            prereg: ''
        };

        $scope.selectedEvent = {
            _id: '',
            name: '',
            date: new Date(),
            address: '',
            prereg: ''
        };

        $scope.newSelectedEvent = {
            _id: $scope.selectedEvent._id,
            name: $scope.selectedEvent.name,
            date: $scope.selectedEvent.date,
            address: $scope.selectedEvent.address,
            prereg: $scope.selectedEvent.prereg,
            mixin: function truthyObjLoop(){
                for(var key in this){
                    if(this.hasOwnProperty(key) && !this[key]) delete this[key];
                }
            }
        };

        $scope.alterEvent = function(){
            $scope.newSelectedEvent.mixin();
            Object.assign($scope.selectedEvent, $scope.newSelectedEvent);

            var url = hostname + 'api/events';
            $http.post(url, $scope.selectedEvent)
                .then(function(res){
                    alert('Event changed successfully!');
                    $scope.getAllEvents();
                })
                .catch(function(err){
                    alert('There was an error. Please try again.');
                })
        };

        $scope.submitNewEvent = function(){
            var url = hostname + 'api/events';
            $http.put(url, $scope.event)
                .then(function(data){
                    alert('Successfully submitted event!');
                    $scope.getAllEvents();
                })
                .then(function(err){
                    if(err){
                        console.log(err.message);
                        return;
                    }
                });
        };

        $scope.deleteEvent = function(){
            var url = hostname + 'api/events/' + $scope.selectedEvent._id;
            $http.delete(url)
                .then(function(res){
                    alert('Delete Sucessfull!');
                    $scope.getAllEvents();
                })
                .catch(function(err){
                    alert('Delete Failed. Please try again.');
                })
        };


        $scope.getAllEvents = function() {
            $http.get(hostname + 'api/events/true')
                .then(function (res) {
                    $scope.events = res.data;
                })
                .catch(function (err) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                })
        }

        $scope.getAllEvents();
    });
