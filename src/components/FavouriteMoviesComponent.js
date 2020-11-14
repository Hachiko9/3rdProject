import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FavouriteMovieComponent from "./FavouriteMovieComponent";
import {getFavouriteMovies, getReviewsByUser} from "../services/ReviewService";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 24,
        width: '100%'
    },
    title: {
        color: theme.palette.primary.main,
        textShadow: '3px 1px 4px black',
        textAlign: 'center'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '1rem',
        marginBottom: 32
    }
}));

const FavouriteMoviesComponent = ({user}) => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {user.favouriteMoviesIds.length > 0 &&
            <div>
                <h1 className={classes.title}>Favourite movies</h1>
                <div className={classes.grid}>
                    { user.favouriteMoviesIds.map(favMovieId =>
                        <FavouriteMovieComponent favMovieId={favMovieId}/>
                    )}
                </div>
            </div>
            }
        </div>
    );
}

export default FavouriteMoviesComponent;