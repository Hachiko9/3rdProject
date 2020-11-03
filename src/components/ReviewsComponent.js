import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ReviewComponent from "./ReviewComponent";
import {deleteReview, getReviewsByMovie} from "../services/ReviewService";
import {useParams} from "react-router-dom";
import {getMovie} from "../services/MoviesService";

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

const ReviewsComponent = () => {
    const classes = useStyles();
    const [ reviews, setReviews ] = useState([]);
    const {movieId} = useParams();
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        getReviewsByMovie(movieId).then(movie => setReviews(movie));
    }, []);

    const handleDelete = (reviewId) => {
        deleteReview(user._id, reviewId).then(() => {
            const newReviews = reviews.filter(review => review._id !== reviewId);
            setReviews(newReviews);
        }).catch(err => console.log(err))
    }


    return (
        <div className={classes.root}>
            <h2>All reviewes</h2>
            <div className={classes.grid}>
                {reviews.length > 0 && reviews.map(review =>
                    <ReviewComponent key={review.id} review={review} handleDelete={handleDelete}/>
                )}
            </div>
        </div>
    );
}

export default ReviewsComponent;