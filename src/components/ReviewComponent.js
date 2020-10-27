import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


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

const ReviewComponent = ({review}) => {
    const classes = useStyles();

    return (
       // <Link href={`/review-edit/${review.id}`}>
            <div className={classes.root}>
                <span>{review.author}</span>
                <span>{review.content}</span>
            </div>
        //</Link>

    );
}

export default ReviewComponent;