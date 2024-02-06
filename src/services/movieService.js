const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

//TODO: Filter result in mongoDB
exports.search = async (title, genre, year) => {
    let newMovies = await Movie.find().lean();

    if (title) {
        newMovies = newMovies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        newMovies = newMovies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        newMovies = newMovies.filter(movie => movie.year === year);
    }

    return newMovies;
}

exports.getOne = (movieId) => Movie.findById(movieId);

exports.create = (movieData) => Movie.create(movieData);

exports.attach = (movieId, castId) => {
    // const movie = await this.getOne(movieId);

    // //TODO: validate castid if exists
    // movie.casts.push(castId);
    // return movie.save();

    Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
}