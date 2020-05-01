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

### Examples
Concert This
![concert-this screenshot](https://github.com/MagusConjurer/liri-node-app/images/concert-this.png)

Spotify This Song
![spotify-this-song screenshot](https://github.com/MagusConjurer/liri-node-app/images/spotify-this-song.png)

Movie This
![movie-this screenshot](https://github.com/MagusConjurer/liri-node-app/images/movie-this.png)

Do What It Says
![do-what-it-says screenshot](https://github.com/MagusConjurer/liri-node-app/images/do-what-it-says.png)

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