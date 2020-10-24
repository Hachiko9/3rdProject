import axios from 'axios';

export default axios.create({
    withCredentials: true,
    headers: {
        common: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
            Accept: 'application/json'
        }
    }
});
