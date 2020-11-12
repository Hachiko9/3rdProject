import React, {useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {getMovie} from "../services/MoviesService";
import ReviewsComponent from "./ReviewsComponent";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    // infoContainer: {
    //     display: 'flex',
    //     margin: 80,
    //     justifyContent: 'flex-start',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'contain'
    // },
    // textContainer: {
    //     marginLeft: 40,
    // },
    // imageAndBtns: {
    //     color: 'white',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'flex-end',
    //     alignItems: 'flex-start'
    //
    // },
    // divider: {
    //     width: '55%',
    //     color: 'red',
    //     height: -10,
    //     backgroundColor: theme.palette.primary.main,
    //     margin: '80px auto'
    // },
    // actionsContainer: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     width: '100%',
    //     '& > *': {
    //         marginTop: 16
    //     }
    // }
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
            <img src={`https://image.tmdb.org/t/p/w200${favMovie.poster_path}`}/>
            }

            {/*<div className={classes.infoContainer}>*/}
            {/*    <div className={classes.imageAndBtns}>*/}
            {/*        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>*/}

            {/*        <div className={classes.actionsContainer}>*/}
            {/*            <Button variant="outlined" color="secondary" startIcon={<EditIcon/>} onClick={() => handleDelete(review._id)}>*/}
            {/*                Edit review*/}
            {/*            </Button>*/}
            {/*            <Button variant="outlined" color="primary" startIcon={<DeleteIcon/>} onClick={() => handleDelete(review._id)}>*/}
            {/*                Delete*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <div className={classes.textContainer}>*/}
            {/*            <span style={{fontSize: 32, color: theme.palette.primary.main}}>*/}
            {/*                {movie.title}*/}
            {/*            </span>*/}
            {/*            <div>*/}
            {/*                <p>Score: {review.score}</p>*/}
            {/*                <article className={classes.text}>{review.content}</article>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <ReviewsComponent/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Divider variant="middle" className={classes.divider}/>
        </div>
//</Link>

    );
}

export default FavouriteMovieComponent;