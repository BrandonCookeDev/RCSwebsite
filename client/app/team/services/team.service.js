angular.module('RCSapp.team')
    .service('TeamService', function(){

    var service = {
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
                    name:'Brandon Cooke',
                    position:'Producer',
                    bio:'Raised in Woodstock, Georgia, Brandon received his Bachelors degree in Computer Science ' +
                        'from Kennesaw State University in 2014, and has since continued on to study '+
                        'Computer Science at Georgia Tech for his Master\'s Degree. After running Clash King Studios '+
                        'for the Georgia Melee community for over half a year, he brings his experience and tech '+
                        'savy talent to the Recursion team as our main Producer. ',
                    picture:'../../images/team/staff/Brandon.jpg',
                    category:'staff'
                },
                {
                    name:'John \'SleepyK\' Lee',
                    position:'Outreach',
                    bio:'',
                    picture:'../../images/team/staff/SleepyK.jpg',
                    category:'staff'
                },
                {
                    name:'Conor Hagan',
                    position:'Graphics Artist',
                    bio:'',
                    picture:'../../images/team/staff/Conor.png',
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
                    picture:'../../images/team/players/Kevin.png',
                    category:'player'
                }
            ]
            return team;
        }
    }
    return service;
});