angular.module('RCSapp.team')
    .service('TeamService', function($http){

    var service = {
        hostname: 'http://localhost:8088',
        playerList: null,
        staffList: null,
        getStaff: function(){
            var team = [
                {
                    name:'Brian Buckley',
                    position:'Director',
                    bio:'',
                    picture:'../../images/team/staff/Brian.jpg',
                    category:'staff'
                },
                {
                    name:'Brandon \'cookiE\' Cooke',
                    position:'Producer',
                    bio:'Brandon has been streaming events in the Southeast since August of 2015, starting under ' +
                    'Clash King Studios. As Clash King Studios, Brandon quickly grew the stream to be Georgia\'s main ' +
                    'source for Melee content. As it continued to grow, a major rebranding and jump in quality ' +
                    'were in order. Recursion was started as the beginnings of a Clash King Studios rebrand and ' +
                    'quickly became its own organization under renewed leadership. Brandon is also a software developer ' +
                    'for AT&T, graduate student at Georgia Tech, and father of two. ',
                    picture:'../../images/team/staff/Brandon.jpg',
                    category:'staff'
                },
                {
                    name:'John \'SleepyK\' Lee',
                    position:'Outreach',
                    bio:'A long-time community figure, SleepyK has been part of the competitive Melee community since ' +
                    '2007. Since his retirement from competitive Melee in 2011, SleepyK has focused on growing the ' +
                    'Georgia Melee community and leading it forward from its grassroots beginnings. He\'s now known ' +
                    'for his work as a community leader, top-level analyst, and commentator for both local and national events. ' +
                    'You can often find him analyzing viewers\' matches on his Twitch stream or taking Duna pics at tournaments',
                    picture:'../../images/team/staff/SleepyK.jpg',
                    category:'staff'
                },
                {
                    name:'Conor Hagan',
                    position:'Graphics Artist',
                    bio:'',
                    picture:'../../images/team/staff/Conor.jpg',
                    category:'staff'
                }
            ]
            return team;
        },
        getPlayers: function(){
            var team = [
                {
                    name:'Kevin \'KPAN\' Pan',
                    position:'Player',
                    bio:'',
                    picture:'../../images/team/players/KPAN.jpg',
                    category:'player'
                }
            ]
            return team;
        },
        getStaffDb: function(){
            var url = this.hostname + '/api/team/staff';
            $http.get(url)
                .success(function(data){
                    return data;
                })
                .error(function(err){
                    // TODO handle
                })
        },
        getPlayersDb: function(){
            var url = this.hostname + '/api/team/player';
            $http.get(url)
                .success(function(data){
                    return data;
                })
                .error(function(err){
                    // TODO handle
                })
        }
    }
    return service;
});