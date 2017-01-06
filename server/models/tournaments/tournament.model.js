var mongoose = require('mongoose');

var YTPlaylistSchema = mongoose.Schema({
    name:String,
    link:String
});
var BracketSchema = mongoose.Schema({
    name:String,
    link:String
});

var Bracket = mongoose.model('Bracket', BracketSchema);
var YTPlaylist = mongoose.model('YTPlaylist', YTPlaylistSchema);

var TournamentSchema = mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    brackets: [Bracket],
    youtubePlaylists: [YTPlaylist]
});

module.exports = mongoose.model('Tournament', TournamentSchema, 'tournaments');