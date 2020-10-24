import React, {useEffect, useState} from 'react';
import MovieBoxComponent from "./MovieBoxComponent";
import {makeStyles} from "@material-ui/core/styles";

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

const NowPlayingComponent = ({movies}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>Now Playing</h2>
            <div className={classes.grid}>
                {movies.map(movie =>
                <MovieBoxComponent {...{movie}} />
                )}
            </div>
        </div>
    );
}

export default NowPlayingComponent;