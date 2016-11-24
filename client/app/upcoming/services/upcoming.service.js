angular.module('RCSapp.upcoming')
    .service('UpcomingService', function($http){
        var service = {
            events: [],
            getEvents: function(){
                events = [
                    {
                        name: 'NaCl December',
                        date: new Date(),
                        address: 'TBD',
                        registration: 'TBD'
                    }
                ];
                return events;
            }
        };
        return service;
    });