import axios from 'axios';

export const login = (email, password) => {
    return axios.post('http://localhost:8000/login', {email, password})
        .then(res => {
            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('user', JSON.stringify(res.user));
            return res;
        })
        .catch(err => err);
}

export const signup = (email, username, password) => {
    return axios.post('http://localhost:8000/signup', {email, username, password})
        .then(res => {
            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('user', JSON.stringify(res.user));
            return res;
        })
        .catch(err => err);
}

export const logout = () => {
    const accessToken = localStorage.getItem('accessToken');
    return axios.post('http://localhost:8000/logout', {accessToken})
        .then(() => {
            localStorage.clear();
        })
        .catch(err => err);
}