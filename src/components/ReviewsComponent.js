import React, {useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ReviewComponent from "./ReviewComponent";
import {deleteReview, mergeReviewsByMovies} from "../services/ReviewService";
import {useParams} from "react-router-dom";
import Divider from "./DividerComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 24,
    },
}));

const ReviewsComponent = ({reviewsByUser, user}) => {
    const classes = useStyles();
    const theme = useTheme();

    const [ reviews, setReviews ] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        if (!reviewsByUser) {
            mergeReviewsByMovies(movieId).then(reviews => setReviews(reviews));
        } else {
            setReviews(reviewsByUser)
        }
    }, []);

    const handleDelete = (reviewId) => {
        deleteReview(user._id, reviewId).then(() => {
            const newReviews = reviews.filter(review => review._id !== reviewId);
            setReviews(newReviews);
        }).catch(err => console.log(err))
    }

    return (
        <div className={classes.root}>
            {reviews.length > 0 &&
            <div>
                <Divider/>
                <h3 style={{color: theme.palette.primary.main, textAlign: 'center'}}>Reviews</h3>
                <div className={classes.grid}>
                    {reviews.length > 0 && reviews.map(review =>
                        <ReviewComponent key={review.id || review._id} review={review} handleDelete={handleDelete}/>
                    )}
                </div>
            </div>
            }
        </div>
    );
}

export default ReviewsComponent;