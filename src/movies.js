// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const movies = require("./data.js");
// console.log(movies)

function getAllDirectors(moviesArray) {
  let finalArray = [];
  moviesArray.forEach((movie) => finalArray.push(movie.director));
  return finalArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movieFilter = moviesArray.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director == "Steven Spielberg"
    );
  }).length;
  return movieFilter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length <= 0) return 0;
  const numberOfElements = moviesArray.length;
  const averageScore =
    moviesArray
      .filter((item) => item.score)
      .reduce((prev, curr) => prev + curr.score, 0) / numberOfElements;
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const movieFilter = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(movieFilter);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = [...moviesArray];
  return copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const myArray = [];

  moviesArray.forEach((movie) => myArray.push(movie));

  const onlyTitles = myArray.map((movie) => movie.title);

  onlyTitles.sort((a, b) => a.localeCompare(b));

  return onlyTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((movie) => {
    const hour = movie.duration.split(":")[0];
    const minute = movie.duration.split(":")[1];
    const newDuration = Math.floor(hour * 60) + minute;
  });
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
