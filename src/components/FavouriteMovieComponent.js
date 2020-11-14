import React, {useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {getMovie} from "../services/MoviesService";
import ReviewsComponent from "./ReviewsComponent";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import MovieBoxComponent from "./MovieBoxComponent";

const useStyles = makeStyles((theme) => ({
}));

const FavouriteMovieComponent = ({favMovieId}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [favMovie, setFavMovie] = useState(null);

    useEffect(() => {
        console.log('x', favMovieId)
        getMovie(favMovieId).then(m => setFavMovie(m));
    }, []);

    return (
        <div>
            {favMovie &&
                <div>
                    <MovieBoxComponent movie={favMovie}/>
                    <Divider variant="middle" className={classes.divider}/>
                </div>
            }
        </div>
//</Link>

    );
}

export default FavouriteMovieComponent;