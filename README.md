# liri-node-app
A LIRI app that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Overview
This app is accessed through a command line terminal.

### How to Use
1. Download the directory
2. Run "npm install" to install the npms from the package
3. Create a .env file and enter your Spotify ID and secret
4. You are now ready to use one of the following commands:
  - node liri.js concert-this 'artist/band name here'
    - This will return the venue name, venue location and event date.
  - node liri.js spotify-this-song 'song name here'
    - This will return the artist(s), song name, the album name, and a preview link.
  - node liri.js movie-this 'movie name here'
    - This will return the title, year, IMDB rating, Rotten Tomatoes rating, country, language, plot and actors.
  - node liri.js do-what-it-says
    - This will read the text entered in random.txt and run any matching commands. 
5. You can update random.txt with any actions in the following format: action,input

### Examples
Concert This
![concert-this screenshot](https://raw.githubusercontent.com/MagusConjurer/liri-node-app/master/images/concert-this.PNG)

Spotify This Song
![spotify-this-song screenshot](https://raw.githubusercontent.com/MagusConjurer/liri-node-app/master/images/spotify-this-song.PNG)

Movie This
![movie-this screenshot](https://raw.githubusercontent.com/MagusConjurer/liri-node-app/master/images/movie-this.PNG)

Do What It Says
![do-what-it-says screenshot](https://raw.githubusercontent.com/MagusConjurer/liri-node-app/master/images/do-what-it-says.PNG)

### Technology Used
- Node.js
- Javascript
- Bands in Town API
- OMDB API
- node-spotify-api npm
- axios npm
- moment npm
- fs npm
- dotenv npm