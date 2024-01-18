const movies = [
    {
        title: 'Jungle Cuise',
        genre: 'Advunture',
        director: 'Spilberg',
        year: '2019',
        imageUrl: '/img/jungle-cruise.jpeg',
        rating: '5',
        description: 'Description movie'
    }
];

exports.create = (movieData) => {
    movies.push(movieData);
}