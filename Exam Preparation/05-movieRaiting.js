function movieRatings(input) {
    let numberOfMovies = Number(input[0]);
    let index = 1;
    
    let highestRating = Number.MIN_VALUE;
    let lowestRating = Number.MAX_VALUE;
    let highestRatedMovie = '';
    let lowestRatedMovie = '';
    let totalRating = 0;

    for (let i = 0; i < numberOfMovies; i++) {
        let movieName = input[index];
        let rating = parseFloat(input[index + 1]);

        if (rating > highestRating) {
            highestRating = rating;
            highestRatedMovie = movieName;
        }

        if (rating < lowestRating) {
            lowestRating = rating;
            lowestRatedMovie = movieName;
        }

        totalRating += rating;
        index += 2;
    }

    let averageRating = totalRating / numberOfMovies;

    console.log(`${highestRatedMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatedMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
movieRatings (["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])