import axios from 'axios';

export const getReviewsByMovie = (movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => res.data.results)
}
