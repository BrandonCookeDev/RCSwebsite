angular.module('RCSapp.upcoming')
    .service('UpcomingService', function($http){
        var service = {
            events: [],
            getEvents: function(){
                events = [
                    {
                        name: 'NaCl December',
                        date: new Date(),
                        address: '1956 Duluth Highway, suite B111, Lawrenceville, Georgia 30043',
                        prereg: 'https://smash.gg/tournament/the-lab-gaming-presents-nacl-december-2016-north-atlanta-championship/register/embed'
                    }
                ];
                return events;
            }
        };
        return service;
    });