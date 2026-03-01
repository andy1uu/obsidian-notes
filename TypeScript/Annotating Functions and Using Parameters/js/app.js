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
const printMovieInfo = (title, yearReleased, ...castMembers) => {
    console.log(`Movie Title: ${title}`);
    console.log(`Year Released: ${yearReleased}`);
    console.log("Cast: ");
    for (const name of castMembers) {
        console.log(`  ${name}`);
    }
};
printMovieInfo("A New Hope", 1977, "A", "B");
//# sourceMappingURL=app.js.map