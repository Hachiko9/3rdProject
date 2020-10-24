import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: 'no-repeat',
        width: 300,
        height: 170,
        backgroundSize: 'cover',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'

    }
}));

const MovieBoxComponent = ({movie}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}}>
                <span>{movie.title}</span>
                <span>{movie.vote_average}</span>
        </div>
    );
}

export default MovieBoxComponent;