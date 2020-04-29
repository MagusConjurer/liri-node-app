require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
//var spotify = new Spotify(keys.spotify);

// Use Bands in Town to return a concert for the artist
// node liri.js concert-this <artist/band name here>
function concertThis(artist){
  var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  axios.get(bandURL)
  .then(function(response){
    var venue = response.data[0].venue.name;
    var location = response.data[0].venue.location;
    // Use moment to convert to MM/DD/YYYY
    var date = response.data[0].datetime;
    console.log(venue, location, date);
  }).catch(function(error){
    if(error.response){
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if(error.request){
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    };
  });
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

var action = process.argv[2];
var input = process.argv[3];

if(action = "concert-this"){
  concertThis(input);
};