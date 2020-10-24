import React, {useEffect, useState} from 'react';
import MovieBox from "./MovieBox";
import {makeStyles} from "@material-ui/core/styles";
import {nowPlaying} from "../services/MoviesService";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '90%'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '1rem'
    }
}));

const NowPlaying = () => {
    const classes = useStyles();
    const [ npMovies, setNPMovies ] = useState([]);

    useEffect(() => {
        nowPlaying().then(movies => setNPMovies(movies.slice(0,12)));
    }, []);

    return (
        <div className={classes.root}>
            <h2>Now Playing</h2>
            <div className={classes.grid}>
                {npMovies.map(movie =>
                <MovieBox {...{movie}} />
                )}
            </div>
        </div>
    );
}

export default NowPlaying;