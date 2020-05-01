require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Use Bands in Town to return a concert for the artist
// node liri.js concert-this 'artist/band name here'
function concertThis(artist){
  var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  axios.get(bandURL)
  .then(function(response){
    if(response.data[0].venue == undefined){
      console.log("No event could be found.");
    } else {
      var venue = response.data[0].venue.name;
      var location = response.data[0].venue.location;
      var date = response.data[0].datetime;
      date = moment(date, "YYYY-MM-DD HH:mm:ss").format("MM-DD-YYYY");
      console.log(" ")
      console.log("Artist: " + artist);
      console.log("Venue: " + venue);
      console.log("Location: " + location);
      console.log("Date: " + date);
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
// node liri.js spotify-this-song 'song name here'
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
      console.log(" ");
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
// node liri.js movie-this 'movie name here'
function movieThis(movie) {
  if(!movie){
    movie = "Mr. Nobody";
  };
  var movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;
  axios.get(movieURL)
  .then(function(response){
    if(response.data.Title == undefined){
      console.log("No movie could be found for: " + movie);
    } else {
      console.log(" ");
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB: " + response.data.Ratings[0].Value);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
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
// node liri.js do-what-it-says
function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(error, data) {
    if(error){
      return console.log(error);
    }
    var randomActions = data.split(",");
    for(var i = 0; i < randomActions.length; i++){
      if(randomActions[i] == "concert-this"){
        concertThis(randomActions[i+1]);
      } else if (randomActions[i] == "spotify-this-song"){
        spotifyThisSong(randomActions[i+1]);
      } else if (randomActions[i] == "movie-this"){
        movieThis(randomActions[i+1]);
      }
    }
  });
};

// Use fs package to store a history of commands that have been run.
function logAction(action, input){
  var logItem;
  if(!input){
    logItem = "\n" + moment().format('MM-DD-YYYY, HH:mm:ss a') + "," + action;
  }else{
    logItem = "\n" + moment().format('MM-DD-YYYY, HH:mm:ss a') + "," + action + "," + input;
  };
  
  fs.appendFile("log.txt", logItem, function(err){
    if(err){
      return console.log(err);
    };
  });
};

var action = process.argv[2];
var input = process.argv[3];

if(action == "concert-this"){
  concertThis(input);
  logAction(action, input);
} else if (action == "spotify-this-song"){
  spotifyThisSong(input);
  logAction(action, input);
} else if (action == "movie-this"){
  movieThis(input);
  logAction(action, input);
} else if (action == "do-what-it-says"){
  doWhatItSays();
  logAction(action);
}