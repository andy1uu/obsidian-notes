"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getReview = (movieTitle) => {
    if (movieTitle == "A New Hope") {
        return "An instant classic!";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
};
const movieTitle = "A New Hope";
let movieReview = getReview(movieTitle);
console.log(`Movie title: ${movieTitle}`);
if (typeof (movieReview) == "string") {
    console.log(`Movie Review: ${movieReview}`);
}
else {
    console.log(`Movie Rating: ${movieReview}/10`);
}
//# sourceMappingURL=app.js.map