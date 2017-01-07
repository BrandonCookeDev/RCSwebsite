var mongoose = require('mongoose');
var Tournament = require('../../models/tournaments/tournament.model');

mongoose.connect('mongodb://localhost/RCSwebsite');


var GeorgiaArcadian = new Tournament.Tournament({
    name: 'georgiaArcadian',
    displayName: 'Who the F%!K is ___?: The Georgia Arcadian',
    description: [
        'The first event hosted by Recursion, The Georgia Arcadian brought 180 players from across the state' +
        ' to compete in their favorite 15 year-old game, quickly making it one of the largest Melee events in the state\'s' +
        ' history. An arcadian, in its premise, is a tournament meant to encourage newer and lower-level players to compete' +
        ' by means of removing the top-ranked talent from the equation.',

        'The Georgia Arcadian showcased our commitment to delivering high-quality events in a community-focused manner.' +
        ' From an organizing perspective, the goal of the event was to bring the techniques and improvements often seen' +
        ' in national, big-budget tournaments and prove they can be scaled to a local level. This meant properly' +
        ' investing in equipment such as signage, printing, and photography, as well as focusing on logistics in a' +
        ' way that left players saying it "felt like a national".'
        ],
    brackets: [
        new Tournament.Bracket({
            name: 'Top48',
            link: 'https://smash.gg/tournament/the-georgia-arcadian-1/events/melee-singles/brackets/68181'
        }),
        new Tournament.Bracket({
            name: 'Death Pool',
            link: 'https://smash.gg/tournament/the-georgia-arcadian-1/events/melee-singles/brackets/68867'
        }),
        new Tournament.Bracket({
            name: 'Amatuer Bracket',
            link: ''
        }),
        new Tournament.Bracket({
            name: 'The Melee Games',
            link: 'https://smash.gg/tmg/events/the-georgia-arcadian/brackets/67708'
        })
    ],
    ytplaylists:[
        new Tournament.YTPlaylist({
            name: 'Top48',
            link: 'https://www.youtube.com/watch?list=PLwn1_ksYqBaOtcwe5l3ziU2o9h1sKJoQf&v=XxxjoQDfyXo',
            embedded: 'https://www.youtube.com/embed/videoseries?list=PLwn1_ksYqBaOtcwe5l3ziU2o9h1sKJoQf'
        }),
        new Tournament.YTPlaylist({
            name: 'Pools',
            link: 'https://www.youtube.com/watch?list=PLwn1_ksYqBaPhLezC8tSoJq7ibYmqJOif&v=bBNQtLFEs5Q',
            embedded: 'https://www.youtube.com/embed/videoseries?list=PLwn1_ksYqBaPhLezC8tSoJq7ibYmqJOif'
        })
    ]
});

GeorgiaArcadian.save(function(err, doc){
    if(err){
        console.log(err.message);
    }
    console.log('saved successfully');
})