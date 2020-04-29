require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


// Use Bands in Town to return a concert for the artist
function concertThis(){

};

// Use Spotify to identify the artist and provide a preview
function spotifyThisSong() {

};

// Use OMDB to provide the movie details using axios
function movieThis() {

};

// Use fs package to read random.txt file and call one of the LIRI commands
function doWhatItSays(){

};

// Use fs package to store a history of commands that have been run.
function logAction(){

}