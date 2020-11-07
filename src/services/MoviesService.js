import axios from 'axios';

export const getMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(res => res.data.results).catch(err => console.log(err.response))
}

export const getMovie = (movieId) => {
    console.log(movieId)
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(res => res.data).catch(err => console.log(err.response))
}

export const searchMovie = (query) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`)
        .then(res => res.data.results)
}

export const nowPlaying = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
        .then(res => res.data.results)
}

export const getMovieImage = (movieId) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(res => console.log(res))
}

export const getSimilarMovies = (movieId) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(res => console.log(res))
}

export const getTopRated = () => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(res => console.log(res))
}

export const getGenres = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(res => res.data.genres)
}

export const getMoviesByFilter = (filters) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

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

// export const getLastMovieId = () => {
//     return axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
//         .then(res => res.data.id)
// }