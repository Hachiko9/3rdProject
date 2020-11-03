import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 170,
        backgroundSize: 'cover',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderRadius: 8
    },
    detailsContainer: {
        alignItems: 'flex-start',
        background: 'linear-gradient(180deg,transparent,#000)',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 600,
        height: '30%',
        paddingLeft: 16,
        width: '100%',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    title: {
        overflow: 'hidden',
        textAlign: 'left',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '92%'
    }
}));

const MovieBoxComponent = ({movie}) => {
    const classes = useStyles();

    return (
        <Link underline="none" href={`/movie-details/${movie.id}`}>
            <div className={classes.root} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}}>
                <div className={classes.detailsContainer}>
                    <span className={classes.title}>{movie.title}</span>
                    <span>{movie.vote_average}</span>
                </div>
            </div>
        </Link>

    );
}

export default MovieBoxComponent;