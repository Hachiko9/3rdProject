import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getMovie} from "../services/MoviesService";
import ReviewsComponent from "../components/ReviewsComponent";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ReviewFormComponent from "../components/ReviewFormComponent";
import AuthenticateDialog from "../components/AuthenticateDialog";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {addFavouriteMovie} from "../services/UserService";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ScrollAnimatedComponent from "../components/ScrollAnimatedComponent";

const useStyles = makeStyles((theme) => ({
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 24
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(130px, 1fr))',
        width: '30%'
    },
    movieContainer: {
        background: 'rgba(0, 0, 0, .8)',
        borderRadius: 8,
        marginBottom: 32,
        display: 'flex',
        height: '80vh',
        margin: 'auto',
        top: '100vh',
        overflow: 'scroll',
        padding: 24,
        position: 'relative',
        width: '80%'
    },
    root: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        overflowY: 'scroll'
    },
    title: {
        color: theme.palette.primary.main,
        textShadow: '3px 1px 4px black'
    },
    btn: {
        width: '100%',
        marginTop: 8,
        '&:hover': {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
        }
    }
}));

const MovieDetailsPage = ({setUser, user}) => {
    const {movieId} = useParams();
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const [movie, setMovie] = useState({});
    const [open, setOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getMovie(movieId).then(movie => {
            const date = new Date(movie.release_date)

            setMovie({
                ...movie,
                release_date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
            });
        });
    }, [movieId]);

    const toggleForm = () => {
        if (Object.keys(user).length) {
            setShowForm(!showForm);
        } else {
            setMessage('To leave a review you must be a registered user');
            setOpen(true);
        }
    }

    const getFavouriteBtnLabel = () => {
        return Object.keys(user).length && !user.favouriteMoviesIds.includes(movieId) ? 'ADD TO FAVOURITES' : 'REMOVE FROM FAVOURITES'
    }

    const handleClose = () => {
        setOpen(false);
    }

    const addFavourite = () => {
        if (Object.keys(user).length) {
            addFavouriteMovie(user._id, movie.id).then((user) => {
                setUser(user);
                getFavouriteBtnLabel();
            }).catch(err => console.log(err));
        } else {
            setMessage('To add a favourite you must be a registered user');
            setOpen(true);
        }
    }

    return (
        <>
            {Object.keys(movie).length > 0 && (
                <div className={classes.root}
                     id="movie-details-pg"
                     style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}
                >
                    <ScrollAnimatedComponent/>

                    <div className={classes.movieContainer}>
                        <div style={{width: 200}}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie poster"/>
                            <Button
                                className={classes.btn}
                                variant="outlined"
                                color="secondary"
                                onClick={toggleForm}
                                startIcon={showForm ? <DeleteIcon/> : <AddIcon/>}
                            >
                                {showForm ? 'Discard' : 'Add a review'}
                            </Button>
                            <Button
                                className={classes.btn}
                                variant="outlined"
                                color="secondary"
                                onClick={addFavourite}
                                startIcon={<FavoriteBorderIcon/>}
                            >
                                {getFavouriteBtnLabel()}
                            </Button>
                        </div>
                        {showForm && <ReviewFormComponent user={user} toggleForm={toggleForm}/>}
                        {!showForm && (
                            <div>
                                <div className={classes.infoContainer}>
                                    <h1 className={classes.title}>{movie.title}</h1>
                                    <div className={classes.infoGrid}>
                                        <span>Score:</span>
                                        <span>{movie.vote_average}</span>
                                        <span>Release date:</span>
                                        <span>{movie.release_date}</span>
                                    </div>
                                    <div style={{margin: '30px 0 100px'}}>
                                        <h3>Summary:</h3>
                                        <span className={classes.text}>{movie.overview}</span>
                                    </div>
                                </div>
                                <ReviewsComponent/>
                            </div>
                        )}
                    </div>

                    <AuthenticateDialog open={open} onClose={handleClose} message={message}/>
                </div>
            )}
        </>
    );
}

export default MovieDetailsPage;