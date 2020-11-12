import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {deleteReview, getReviewsByUser, mergeReviewsByMovies} from "../services/ReviewService";
import {useParams} from "react-router-dom";
import UserReviewComponent from "./UserReviewComponent";

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

const UserReviewsComponent = ({user}) => {
    const classes = useStyles();

    const [ reviews, setReviews ] = useState([]);
    const [ update, setUpdate ] = useState(false);

    useEffect(() => {
        getReviewsByUser(user.username).then(reviews => setReviews(reviews));
    }, []);

    useEffect(() => {
        if (update) {
            getReviewsByUser(user.username).then(reviews => {
                setReviews(reviews);
                setUpdate(false);
            });
        }
    }, [update]);

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
                <h1 className={classes.title}>Your Reviews</h1>
                <div className={classes.grid}>
                    {reviews.length > 0 && reviews.map(review =>
                        <UserReviewComponent key={review.id || review._id} user={user} review={review} handleDelete={handleDelete} movieId={review.movieId} setUpdate={setUpdate}/>
                    )}
                </div>
            </div>
            }
        </div>
    );
}

export default UserReviewsComponent;