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
                    position:'Director, Co-Founder',
                    twitter: 'Brian_Buckley',
                    bio:'The head tournament organizer and business planner for Recursion, Brian specializes in ' +
                    'planning events with production value and viewership in mind. Brian got his start in live media ' +
                    'and event planning with gaming charity events, starting with popular marathon series Zeldathon. ' +
                    'There he focused on expanding viewership to outside communities and establishing communications ' +
                    'with other charities and organizations. In the Smash Bros. community, Brian has been organizing ' +
                    'and helping run events for two years, often managing stream content and advising in logistics for ' +
                    'regional and national tournaments. Now he focuses largely on growing the local Smash Bros. scene ' +
                    'in Georgia and expanding its presence nationally with Recursion.',
                    picture:'../../images/team/staff/Brian.jpg',
                    category:'staff',
                    results: []
                },
                {
                    name:'Brandon \'cookiE\' Cooke',
                    position:'Producer, Co-Founder',
                    twitter: 'RCS_cookiE',
                    bio:'Brandon has been streaming events in the Southeast since August of 2015, starting under ' +
                    'Clash King Studios. As Clash King Studios, Brandon quickly grew the stream to be Georgia\'s main ' +
                    'source for Melee content. As it continued to grow, a major rebranding and jump in quality ' +
                    'were in order. Recursion was started as the beginnings of a Clash King Studios rebrand and ' +
                    'quickly became its own organization under renewed leadership. Brandon is also a software developer ' +
                    'for AT&T, graduate student at Georgia Tech, and father of two. ',
                    picture:'../../images/team/staff/Brandon.png',
                    category:'staff',
                    results: []
                },
                {
                    name:'John \'SleepyK\' Lee',
                    position:'Head of Commentary',
                    twitter:'sleepike',
                    bio:'A long-time community figure, SleepyK has been part of the competitive Melee community since ' +
                    '2007. Since his retirement from competitive Melee in 2011, SleepyK has focused on growing the ' +
                    'Georgia Melee community and leading it forward from its grassroots beginnings. He\'s now known ' +
                    'for his work as a community leader, top-level analyst, and commentator for both local and national events. ' +
                    'You can often find him analyzing viewers\' matches on his Twitch stream or taking Duna pics at tournaments',
                    picture:'../../images/team/staff/SleepyK.jpg',
                    category:'staff',
                    results: []
                },
                {
                    name:'Conor \'Guava\' Hagan',
                    position:'Head of Graphic Design',
                    twitter:'RCS_Guava',
                    bio:null,
                    picture:'../../images/team/staff/Conor.jpg',
                    category:'staff',
                    results: []
                }
            ]
            return team;
        },
        getPlayers: function(){
            var team = [
                {
                    name:'Kevin \'KPAN\' Pan',
                    position:'Player',
                    twitter:'RCS_KPAN',
                    bio:'',
                    picture:'../../images/team/players/KPAN.jpg',
                    category:'player',
                    results: [
                        {
                            "name" : "WTFox 2",
                            "place": 17
                        },
                        {
                            "name" : "CEO 2016",
                            "place": 25
                        },
                        {
                            "name" : "Super Smash Con 16",
                            "place": 49
                        },
                        {
                            "name" : "EVO 2015",
                            "place": 49
                        },
                        {
                            "name" : "Paragon Orlando 2015",
                            "place": 25
                        },
                        {
                            "name" : "Bad Moon Rising",
                            "place": 13
                        }
                    ]
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