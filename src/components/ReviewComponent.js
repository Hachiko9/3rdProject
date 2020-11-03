import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {deleteReview} from "../services/ReviewService";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: 'no-repeat',
        width: 300,
        height: 170,
        backgroundSize: 'cover',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'

    }
}));

const ReviewComponent = ({handleDelete, review}) => {
    const classes = useStyles();

    return (
       // <Link href={`/review-edit/${review.id}`}>
            <div className={classes.root}>
                <span>{review.author}</span>
                <span>{review.content}</span>
                <Button variant="outlined" color="primary" onClick={() => handleDelete(review._id)}>
                    Delete
                </Button>
            </div>
        //</Link>

    );
}

export default ReviewComponent;