"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const printMovieInfo = (movie) => {
    console.log(`Movie Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
};
let myMovie = {
    title: "Rogue One",
    director: "Gareth Edwards",
    yearReleased: 2016,
    streaming: true,
    length: 133,
    logReview: (review) => console.log(`Review: ${review}`)
};
printMovieInfo(myMovie);
if (myMovie.logReview) {
    myMovie.logReview("Hi");
}
//# sourceMappingURL=app.js.map