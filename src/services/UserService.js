import axios from 'axios';

export const login = (email, password) => {
    return axios.post('http://localhost:5000/user/login', {email, password})
        .then(res => {
            console.log(res);
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res;
        })
        .catch(err => err);
}

export const signup = (email, password, username) => {
    return axios.post('http://localhost:5000/user/signup', {email, username, password})
        .then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res;
        })
        .catch(err => err);
}

export const logout = () => {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    return axios.post('http://localhost:5000/user/logout', {userId})
        .then(() => {
            localStorage.clear();
        })
        .catch(err => err);
}