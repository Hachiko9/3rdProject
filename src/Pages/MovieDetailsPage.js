import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getMovie} from "../services/MoviesService";
import ReviewsComponent from "../components/ReviewsComponent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    imgCover: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 300
    },
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
        bottom: '10%',
        display: 'flex',
        height: '80vh',
        margin: 'auto',
        marginTop: '100vh',
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
    }
}));

const MovieDetailsPage = () => {
    const classes = useStyles();

    const [movie, setMovie] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        getMovie(movieId).then(movie => {
            const date = new Date(movie.release_date)

            setMovie({
                ...movie,
                release_date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
            });
        });
    }, []);

    return (
        <>
            {Object.keys(movie).length > 0 && (
                <div className={classes.root}
                     style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
                    <div className={classes.movieContainer}>
                        <img
                            className={classes.imgCover}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        />
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
                    </div>

                </div>
            )}
        </>
    );
}

export default MovieDetailsPage;