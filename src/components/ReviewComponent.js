import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {deleteReview} from "../services/ReviewService";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'

    },
    divider: {
        width: '55%',
        color: 'red',
        height: -10,
        backgroundColor: theme.palette.primary.main,
        margin: '80px auto'
    }
}));

const ReviewComponent = ({handleDelete, review, user}) => {
    const classes = useStyles();
    const canDelete = user && (review.author === user._id || review.author === user.username);

    return (
        // <Link href={`/review-edit/${review.id}`}>
        <div className={classes.root}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
            {canDelete && (
                <Button variant="outlined" color="primary" onClick={() => handleDelete(review._id)}>
                    Delete
                </Button>
            )}
            <Divider variant="middle" className={classes.divider}/>
        </div>
        //</Link>

    );
}

export default ReviewComponent;