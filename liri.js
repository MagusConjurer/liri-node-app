require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Use Bands in Town to return a concert for the artist
// node liri.js concert-this <artist/band name here>
function concertThis(artist){
  var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  axios.get(bandURL)
  .then(function(response){
    if(response.venue == undefined){
      console.log("No event could be found.");
    } else {
      var venue = response.data[0].venue.name;
      var location = response.data[0].venue.location;
      // Use moment to convert to MM/DD/YYYY
      var date = response.data[0].datetime;
      console.log(venue, location, date);
    };
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
// node liri.js spotify-this-song '<song name here>'
function spotifyThisSong(song) {
  if(!song){
    song = "The Sign";
  }
  spotify.search(
    {
      type: 'track',
      query: song
    }
  ).then(function(response){
    var songArtist = response.tracks.items[0].artists[0].name;
    var songName = response.tracks.items[0].name;
    var preview = response.tracks.items[0].preview_url;
    var album = response.tracks.items[0].album.name;
    
    if(songArtist == null){
      console.log("This song could not be found.")
    } else {
      console.log(songName + " by " + songArtist + ".");
      console.log("Released on their album: " + album);
      if(preview == null){
        console.log("No preview available.");
      } else {
        console.log("Preview the song here: " + preview);
      }
    }
  }).catch(function(err){
    console.log(err);
  })

};

// Use OMDB to provide the movie details using axios
// node liri.js movie-this '<movie name here>'
function movieThis(movie) {
  if(!movie){
    movie = "Mr. Nobody";
  };
  var movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;
  axios.get(movieURL)
  .then(function(response){
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB: " + response.data.Ratings[0].Value);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);

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

// Use fs package to read random.txt file and call one of the LIRI commands
function doWhatItSays(){

};

// Use fs package to store a history of commands that have been run.
function logAction(){

}

var action = process.argv[2];
var input = process.argv[3];

if(action == "concert-this"){
  concertThis(input);
} else if (action == "spotify-this-song"){
  spotifyThisSong(input);
} else if (action == "movie-this"){
  movieThis(input);
}