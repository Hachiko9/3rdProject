import axios from 'axios';

export const login = (email, password) => {
    return axios.post(`${process.env.REACT_APP_API_URL}user/login`, {email, password})
        .then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            return res.data.user;
        })
        .catch(err => err);
}

export const signup = (email, password, username) => {
    return axios.post(`${process.env.REACT_APP_API_URL}user/signup`, {email, username, password})
        .then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            return res.data.user;
        })
        .catch(err => err);
}

export const logout = (userId) => {
    return axios.post(`${process.env.REACT_APP_API_URL}user/logout`, {userId})
        .then(() => {
            localStorage.clear();
        })
        .catch(err => err);
}

export const checkSession = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        return axios.get(`${process.env.REACT_APP_API_URL}user/session/${token}`)
            .then((res) => res.data.session.userId)
            .catch(err => err);
    }

    return new Promise(() => {});
}

export const addFavouriteMovie = (userId, movieId) => {
    return axios.post(`${process.env.REACT_APP_API_URL}user/${userId}/like`, {movieId})
        .then(res => res.data.user)
}