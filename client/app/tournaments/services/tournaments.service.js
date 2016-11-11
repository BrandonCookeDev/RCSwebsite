angular.module('RCSapp.tournaments')
    .service('TournamentsService', function($routeProvider){
        var service = {
            tournamentLinks: [
                {
                    name: 'The Georgia Arcadian',
                    picture: '../../images/tournaments/TheGeorgiaArcadian/georgiaArcadian.banner.jpg',
                    link: ''
                }
            ],
            tournaments: [
                {
                    name: 'The Georgia Arcadian',
                    display_name: 'Who the F%!K is ___?: The Georgia Arcadian',
                    picture: '../../images/tournaments/georgiaArcadian.banner.jpg',
                    description:'The first event hosted by Recursion, The Georgia Arcadian brought 180 players from ' +
                    'across the state to compete in their favorite 15 year-old game, quickly making it one of ' +
                    'the largest Melee events in the state\'s history. An arcadian, in its premise, is a tournament ' +
                    'meant to encourage newer and lower-level players to compete by means of removing the ' +
                    'top-ranked talent from the equation. ',
                    images: [
                        '../../images/tournaments/TheGeorgiaArcadian/arcadian27.jpg'
                    ],
                    videos: []
                }
            ]
        }
        return service;
    });