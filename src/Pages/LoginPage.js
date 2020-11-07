import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login} from "../services/UserService";
import {makeStyles} from "@material-ui/core/styles";
import {getGenres, getLastMovieId, getMovieImage} from "../services/MoviesService";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'url(https://wallpapercave.com/wp/wp2392657.jpg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        justifyContent: 'center',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        padding: 24,
        background: 'rgba(0, 0, 0, .8)',
        marginLeft: 180
    },
    field: {
        margin: 10,
    }
}));

const LoginPage = () => {
    const classes = useStyles();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    let history = useHistory();

    // useEffect(() => {
    //     getLastMovieId().then(id => getRandomImage(id));
    // }, []);
    //
    // const getRandomImage = (maxId) => {
    //     const randomId = Math.floor(Math.random() * (maxId + 1));
    //     const image = getMovieImage(randomId)
    //     console.log(image)
    // }

    const handleSubmit = () => {
        login(email, password)
            .then(() => history.push('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.root}>
            <form className={classes.form} autoComplete="off">
                <TextField className={classes.field} id="email" label="Email" type="email" color="secondary" variant="outlined" onChange={(ev) => setEmail(ev.target.value)} />
                <TextField className={classes.field} id="password" label="Password" type="password" variant="outlined" onChange={(ev) => setPassword(ev.target.value)} />
                <Button className={classes.field} variant="outlined" color="primary" onClick={handleSubmit}>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginPage;