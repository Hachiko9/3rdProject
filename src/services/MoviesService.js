import axios from 'axios';

export const getMovies = () => {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7190666598a5ce271e7b863bb629a95e')
        .then(res => res.data.results)
}

export const getMovie = (movieId) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => console.log(res))
}

export const searchMovie = (query) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7190666598a5ce271e7b863bb629a95e&query=${query}`)
        .then(res => res.data.results)
}

export const nowPlaying = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7190666598a5ce271e7b863bb629a95e&language=en-US&page=1`)
        .then(res => res.data.results)
}

export const getMovieImage = (movieId) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => console.log(res))
}

export const getSimilarMovies = (movieId) => {
    axios.get(`https://api.themoviedb.org/3//movie/${movieId}/similar?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => console.log(res))
}

export const getTopRated = () => {
    axios.get('https://api.themoviedb.org/3//movie/top_rated?api_key=7190666598a5ce271e7b863bb629a95e')
        .then(res => console.log(res))
}

