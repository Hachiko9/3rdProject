import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FavouriteMovieComponent from "./FavouriteMovieComponent";
import {getFavouriteMovies, getReviewsByUser} from "../services/ReviewService";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 24,
        marginTop: 24
    },
    title: {
        color: theme.palette.primary.main,
        textShadow: '3px 1px 4px black',
        textAlign: 'center'
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