import axios from 'axios';

export const getReviewsByMovie = (movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => res.data.results)
}

export const getReviewsByUser = (author) => {
    return axios.get(`${process.env.REACT_APP_API_URL}reviews/user/${author}`)
        .then(res => res.data.reviews)
}

export const getReviewsByMovieFromInternal = (movieId) => {
    return axios.get(`${process.env.REACT_APP_API_URL}reviews/movies/${movieId}`)
        .then(res => res.data.reviews)
}

export const addReview = (userId, review) => {
    return axios.post(`${process.env.REACT_APP_API_URL}reviews/user/${userId}/add`, review)
        .then(res => res.data)
}

export const editReview = (userId, review, reviewId) => {
    return axios.put(`${process.env.REACT_APP_API_URL}reviews/${reviewId}/user/${userId}`, review)
        .then(res => res.data)
}

export const deleteReview = (userId, reviewId) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}reviews/${reviewId}/user/${userId}/delete`)
        .then(res => res.data)
}

export const mergeReviewsByMovies = async (movieId) => {
    let internal, external;

    await getReviewsByMovie(movieId).then(rv => external = rv);
    await getReviewsByMovieFromInternal(movieId).then(rv => internal = rv);

    return [...internal, ...external];
}