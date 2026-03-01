const printMovieInfo = (title: string, yearReleased: number,
  ...castMembers: string[]): void => {
  console.log(`Movie Title: ${title}`);
  console.log(`Year Released: ${yearReleased}`);

  console.log("Cast: ");

  for (const name of castMembers) {
    console.log(`  ${name}`);
  }
  
}

printMovieInfo("A New Hope", 1977, "Mark", "Carrie");
