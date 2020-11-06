import axios from 'axios';

export const getReviewsByMovie = (movieId) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7190666598a5ce271e7b863bb629a95e`)
        .then(res => res.data.results)
}

export const getReviewsByUser= (userId) => {
    return axios.get(`http://localhost:5000/reviews/user/${userId}`)
        .then(res => res.data.reviews)
}

export const addReview= (userId, review) => {
    return axios.post(`http://localhost:5000/reviews/user/${userId}/add`, review)
        .then(res => res.data)
}

export const editReview= (userId, review, reviewId) => {
    return axios.put(`http://localhost:5000/reviews/${reviewId}/user/${userId}`, review)
        .then(res => res.data)
}

export const deleteReview= (userId, reviewId) => {
    return axios.delete(`http://localhost:5000/reviews/${reviewId}/user/${userId}/delete`)
        .then(res => res.data)
}
