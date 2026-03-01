const getAllMovies = () => [
  { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
  { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true },
  { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
  { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: true },
  { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
  { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
  { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
  { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
  { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
];

type getTitles = {
  (director: string): string[],
  (director: string, streaming: boolean): string[],
 };

const getTitles = (director: string, streaming?: boolean): string[] => {
  const allMovies = getAllMovies();
  const searchResults: string[] = [];

  if (streaming !== undefined) {
    for (let movie of allMovies) {
      if (movie.director === director && movie.streaming === streaming) {
        searchResults.push(movie.title);
      }
    }
  } else {
    for (let movie of allMovies) {
      if (movie.director === director) {
        searchResults.push(movie.title);
      }
    }
  }

  return searchResults;
 }

let movies: string[] = getTitles("George Lucas", true);
movies.forEach(movie => console.log(movie));

const createMovieID = (name: string, id: number): string => name + id;

let x: number;
x = 5;

let idGenerator: (chars: string, nums: number) => string;
idGenerator = (name: string, id: number): string => name + id;

let newID: string = createMovieID("Jedi", 10);
console.log(newID);

newID = idGenerator("Jedi", 15);
console.log(newID);
