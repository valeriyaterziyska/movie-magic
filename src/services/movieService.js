const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Advunture',
    director: 'Spilberg',
    year: '2019',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'Description movie'
}];

exports.getAll = () => {
    return [...movies];
}

exports.create = (movieData) => {
    
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
}