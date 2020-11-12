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
    },
    text: {
        color: 'black',
        opacity: 0,
        transition: 'opacity .3s',
        position: 'absolute',
        bottom: '20%',
        right: '2%',
        fontFamily: 'Amatic SC, cursive',
        letterSpacing: 5,
        textShadow: '3px 2px 2px white'
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
            .then(() => {
                document.getElementById('text').style.opacity = 1;
                setTimeout(() => {
                    history.push('/')
                },1500)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.root}>
            <h1 id="text" className={classes.text}>"I can't remember anything <br/>without you."</h1>
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