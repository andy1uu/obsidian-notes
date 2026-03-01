const getReview = (movieTitle: string): string | number => {
  if (movieTitle == "A New Hope") {
    return "An instant classic!";
  } else {
    return Math.floor(Math.random() * 10);
  }
};

const movieTitle: string = "A New Hope";

let movieReview: string | number = getReview(movieTitle);

console.log(`Movie title: ${movieTitle}`);

if (typeof (movieReview) == "string") {
  console.log(`Movie Review: ${movieReview}`);
} else {
  console.log(`Movie Rating: ${movieReview}/10`);
}
