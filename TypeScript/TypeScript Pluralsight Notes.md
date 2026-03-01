```table-of-contents
```

# Typescript 5 Fundamentals

## Getting Started with Typescript

### What is TypeScript?

- Superset of JavaScript
- Strongly-typed
- Compiles to standard JavaScript
- Runs everywhere JavaScript runs

### Compiling and Running TypeScript Programs

TypeScript programs are compiled into JavaScript using tsc:

```bash
tsc tsFileName.ts
```

Compile in Watch Mode (Compiles changes as you code):

```bash
tsc —-watch tsFileName.ts
```

Compile to Output Dir (Compiles changes as you code):

```bash
tsc —-outDir js tsFileName.ts
```

VSCode Task to Compile TypeScript:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Compiling TypeScript",
      "type": "shell",
      "command": "tsc",
      "presentation": {
        "echo": false,
        "reveal": "silent",
        "focus": false,
        "panel": "shared",
        "showReuseMessage": false,
        "clear": false
      }
    }
  ]
}
```

VSCode Task to Launch TypeScript:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}\\js\\app.js",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ],
      "preLaunchTask": "Compiling TypeScript",
      "internalConsoleOptions": "openOnSessionStart"
    }
  ]
}
```

Now you can run TypeScript code with the Run Current File in VsCode Run and Debug mode!

## Understanding Basic Syntax and Data Types

### Basic Types and Variable Declarations

#### Basic Typescript Types

- Boolean
- Number
- String
- Array
- Enum

#### Declarations with let and const

JavaScript Example

```js
console.log(someString); // Hoisting, syntax is valid but its very 
                         // confusing
var someString = "Hello World";

let someString = "Hello World"; // Recommended method of declaring 
                                // variables in JS and TS
console.log(someString);

const someString = "Hello World";
console.log(someString);
```

### Type Annotations and Type Inference

```ts
let x: string = "I will forever be a string.";
x = 42; // Will give a compiler error because the TS compiler needs x to 
        // be a string. 

let y: string = "I will also forever be a string.";
y = 42; // Will give a compiler error because the TS compiler infers y to 
        // be a string. 

let z  = getSomeValue(); // valid but prefer line below
let z: number = getSomeValue(); // Editors usually mention what types are 
                                // returned
```

### Using let and const with Type Annotations

```ts
const movieTitle: string = "A New Hope";

movieTitle = 10;    // Type 'number' is not assignable to type 'string'.
movieTitle = true;  // Type 'boolean' is not assignable to type 'string'.
movieTitle = "New"; //Can't assign to 'movieTitle' because it is a 
                    // constant. 

console.log(`Movie title: ${movieTitle}`);
```

### Additional Built-in Types

- Void —> Represents the absence of a type.
- Null
- Undefined
- Never —> Assigned to values that will never return.
- Any —> Assigned to variables that can have any value.

### Union Types and the —strictNullChecks Compiler Option

#### Union Types

```ts
let someValue: number | string; // Acceptable value is limited to the 
                                // values in the union
someValue = 23;
someValue = "Hi";
```

#### Using the —strictNullChecks Compiler Option

```ts
let basicString: string;
basicString = null;      // Will give error since the string needs a value
basicString = undefined; // Will give error since the string needs a value

let nullableString: string | null;
basicString = undefined; // Will give error since the undefined is its own
                         // type

let mysteryString: string | null | undefined;
```

#### Declaring Arrays

Arrays can be declared in two different ways:

```ts
let strArray1: string[] = ["here", "are", "strings"];

let strArray2: Array<string> = ["more", "strings", "here"];
```

Declare an array with type any to store any type of data in the array (NOT Recommended)

```ts
let anyArray: any[] = [42, true, "string"];
```

### Controlling Program Flow

```ts
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

let i: number = 0;

while (i < 10) {
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
    i++;
}

let fruit: string = "apple";

switch (fruit) {
    case "orange":
        console.log("You have selected an orange.");
        break;
    case "apple":
        console.log("You have selected an apple.");
        break;
    default:
        console.log("You have selected a different fruit.");
}
```

### Understanding Control Flow Type Analysis

```ts
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
```

## Creating and Calling Functions

### Adding Type Annotations to Functions

Can't tell what the type of the parameters are and what the function returns

```js
function dullFunc(value1, value2) {
    return "I'm boring and difficult. Don't be like me.";
}
```

Similar Function in TypeScript

```ts
function funFunc(score: number, message: string): string {
    return "I've got personality and I'm helpful! Be like me!";
}
```

### Using the —noimplicitAnyCompiler Option

```js
function dullFunc(value1, value2) {
    return "I'm boring and difficult. Don't be like me.";
}
```

Gives TS error that the function parameter implicity has any type

### Optional, Default, and Rest Parameters

#### Optional Parameters

- Optional parameters are denoted with a "?" after the parameter name
- Optional parameters must appear after all required parameters

```ts
function createCustomer(name: string, age?: number) { }
```

#### Default Parameters

- Default parameters must be set to a literal value or an expression
- Default parameters are treated as optional if they appear after the required parameters

```ts
function getBookByTitle(title: string = "The C Programming Language") { }

function getBookByTitle(title: string = getMostPopularBook()) { }
```

#### Rest Parameters

- Rest Parameters collect a group of parameters into a single array
- Rest Parameters are denoted with an ellipsis prefix on the last parameter

```ts
function getBooksReadForCust(name: string, …bookIDs: number[]) { }

let books = getBooksReadForCust("Leigh", 2, 5);

let books = getBooksReadForCust("Daniel", 2, 5, 12, 42);
```

### Annotating Functions and Using Parameters

```ts
const printMovieInfo = (title: string, yearReleased: number,
  ...castMembers: string[]) => {
  console.log(`Movie Title: ${title}`);
  console.log(`Year Released: ${yearReleased}`);

  console.log("Cast: ");

  for (const name of castMembers) {
    console.log(`  ${name}`);
  }
  
}

printMovieInfo("A New Hope", 1977, "Mark", "Carrie");
```

### Anatomy of an Arrow Function

- parameters => function body

```ts
let squareit = x: number => x * x;
let result = squareit(4); // 16

let adder = (a: number, b: number) => a + b;
let sum = adder(2, 3); // 5

let greeting = () => console.log("Hello World!");
greeting(); // Hello World!

let scores: number[] = [70, 125, 85, 110];
let highScores: number[];
highScores = scores.filter((score, index, array) => {
    if (score > 100) {
        return true;
    }
})
```

### Converting a Traditional Function to an Arrow Function

```ts
function logMessage(message: string): void { console.log(message); }

// Turns into
const logMessage = (message: string): void => console.log(message);

logMessage("Hello World!");
```

### Function Overloads

- Overloaded Functions that have one symbol name but multiple function types
- Overloaded Functions have one implementation with type guards

```ts
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    if (typeof bookProperty == "string") {
        // get books by author, add to foundTitles
    } else if (typeof bookProperty == "boolean") {
        // get books by availability, add to foundTitles
    }
    
    return foundTitles;
}
```

```ts
type Movie = { title: string; director: string; yearReleased: number; streaming: boolean; };

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
  const allMovies: Movie[] = getAllMovies();
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
```

### Function Types

- Combination of parameter types and return type
- Variables may be declared with function types
- Function assigned must have the same signature as the variable type

```ts
function releaseMessage(year: number): string {
    return "Year released: " + year;
}

let releaseFunc: (someYear: number) => string;

releaseFunc = releaseMessage;

let message: string = releaseFunc(2024);
```

```ts
const createMovieID = (name: string, id: number): string => name + id;

let x: number;
x = 5;

let idGenerator: (chars: string, nums: number) => string;
idGenerator = createMovieID;

let newID: string = createMovieID("Jedi", 10);
console.log(newID);

newID = idGenerator("Jedi", 15);
console.log(newID);
```