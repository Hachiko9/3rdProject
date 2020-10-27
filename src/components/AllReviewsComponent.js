import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ReviewComponent from "./ReviewComponent";

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

const AllReviewsComponent = ({reviews}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>All reviewes</h2>
            <div className={classes.grid}>
                {reviews && reviews.map(review =>
                    <ReviewComponent key={review.id} review={review}/>
                )}

            </div>
        </div>
    );
}

export default AllReviewsComponent;