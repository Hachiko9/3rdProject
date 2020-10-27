import axios from 'axios';

export const getMovies = () => {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7190666598a5ce271e7b863bb629a95e')
        .then(res => res.data.results)
}

export const getMovie = (movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => res.data)
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
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => console.log(res))
}

export const getTopRated = () => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=7190666598a5ce271e7b863bb629a95e')
        .then(res => console.log(res))
}

export const getGenres = () => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=7190666598a5ce271e7b863bb629a95e')
        .then(res => res.data.genres)
}

export const getMoviesByFilter = (filters) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=7190666598a5ce271e7b863bb629a95e`;

    for (let key in filters) {
        if (typeof filters[key] === 'object') {
            url = url.concat(`&${key}=`)

            filters[key].map((v) => {
                url = url.concat(`${v},`)
            })
        } else {
            url = url.concat(`&${key}=${filters[key]}`)
        }
    }

    return axios.get(url).then(res => res.data.results)
}

