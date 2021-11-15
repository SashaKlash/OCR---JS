// Liste des séries télé
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (numberOfEpisodes * (episodeTime + commercialTime) * numberOfSeasons);
let episodeTitle = "L'envers de l'endroit";
let episodeDuration = 52;
let hasBeenWatched = false;

let paragraph = document.querySelector('#info');

paragraph.innerText = `${numberOfSeasons} season, ${numberOfSeasons} episodes per season
Total viewing time: ${totalShowTime} minutes`;

document.querySelector('#episode-info').innerText = `Épisode: ${episodeTitle}
 Duration: ${episodeDuration} min 
 ${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

 let episode = {
     title: "Au bout de la nuit",
     duration: 52,
     hasBeenWatched: true
 };

 document.querySelector('#episode-info').innerText = `Épisode: ${episode.title}
              Duration: ${episode.duration} min
              ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

let myBook = {
    title: "L'Histoire dde Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook.title;
let bookPages = myBook.numberOfPages;

new episode = {
    title: 'Dark Beginnings',
    duration: 45,
    hasBeenWatched: true
};

let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

document.querySelector('#episode-info').innerText =          `Épisode: ${episodeTitle}
            Duration: ${episodeDuration} min
            ${episodeHasBeenWatched ? 'Already watched' : 'Not yet Watched'}`



