interface ReviewLogger {
  (review: string): void;
}

interface Movie {
  title: string,
  director: string,
  yearReleased: number,
  streaming: boolean, 
  length?: number
  logReview?: ReviewLogger
};

const printMovieInfo = (movie: Movie): void => {
  console.log(`Movie Title: ${movie.title}`);
  console.log(`Year Released: ${movie.yearReleased}`);
  console.log(`Director: ${movie.director}`);
}


let myMovie: Movie = {
  title: "Rogue One",
  director: "Gareth Edwards",
  yearReleased: 2016,
  streaming: true,
  length: 133,
  logReview: (review: string) => console.log(`Review: ${review}`)
}

printMovieInfo(myMovie);

if (myMovie.logReview) {
  myMovie.logReview("Hi");
}
