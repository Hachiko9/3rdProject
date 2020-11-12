import React, {useEffect, useState} from 'react';
import {getReviewsByUser} from "../services/ReviewService";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import UserReviewsComponent from "../components/UserReviewsComponent";
import FavouriteMovieComponent from "../components/FavouriteMovieComponent";
import FavouriteMoviesComponent from "../components/FavouriteMoviesComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        background: 'url(https://tiahlearmond3225.files.wordpress.com/2014/10/american-beauty-original.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    movieContainer: {
        background: 'rgba(0, 0, 0, .8)',
        borderRadius: 8,
        marginBottom: 32,
        display: 'flex',
        height: '80vh',
        margin: 'auto',
        marginTop: 150,
        overflow: 'scroll',
        padding: 24,
        position: 'relative',
        width: '80%'
    }
}));

const Profile = ({user}) => {
    const [ reviews, setReviews ] = useState({});
    const classes = useStyles();

    useEffect(() => {
        getReviewsByUser(user.username)
            .then(reviews => setReviews(reviews))
            .catch(err => console.log(err))
    }, []);

    console.log('user', user);
    return (
        <div className={classes.root}>
            {user.favouriteMoviesIds.length > 0 &&
                <FavouriteMoviesComponent user={user}/>
            }
            <div className={classes.movieContainer}>
                {reviews.length > 0 &&
                    <UserReviewsComponent user={user} reviewsByUser={reviews}/>
                }
            </div>
        </div>
    );
}

export default Profile;