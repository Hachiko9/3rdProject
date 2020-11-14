import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import {getMovie} from "../services/MoviesService";
import MovieBoxComponent from "./MovieBoxComponent";

const useStyles = makeStyles((theme) => ({
}));

const FavouriteMovieComponent = ({favMovieId}) => {
    const classes = useStyles();
    const [favMovie, setFavMovie] = useState(null);

    useEffect(() => {
        getMovie(favMovieId).then(m => setFavMovie(m));
    });

    return (
        <div>
            {favMovie &&
                <div>
                    <MovieBoxComponent movie={favMovie}/>
                    <Divider variant="middle" className={classes.divider}/>
                </div>
            }
        </div>
    );
}

export default FavouriteMovieComponent;