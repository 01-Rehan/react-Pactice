export const getMoviesBySearch = (movies , value) => {
    const filterdMovies = value?.length > 0 ? (movies?.filter(movie => movie.original_title.toLowerCase().includes(value.toLowerCase()))) : movies ;
    return filterdMovies;
}