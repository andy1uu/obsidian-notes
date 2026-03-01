interface ReviewLogger {
  (review: string): void;
}

let printReview: ReviewLogger;

printReview = (review: string) => console.log(`Viewer review: ${review}`);

printReview("I want to see it again!");
