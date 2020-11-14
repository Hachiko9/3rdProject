import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addReview, editReview} from "../services/ReviewService";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 40
    },
    textField: {
        height: 300,
        marginBottom: 12,
        width: 440
    },
    scoreContainer: {
        marginBottom: 24,
        marginTop: 4
    },
    scoreField: {
        width: 100,
        height: 50
    }
}));

const ReviewFormComponent = ({review, user, toggleForm, setUpdate}) => {
    const classes = useStyles();
    const [ content, setContent ] = useState('');
    const [ score, setScore ] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        if (review) {
            setScore(review.score);
            setContent(review.content);
        }
    }, [])

    const handleSubmit = () => {
        if (review) {
            const updatedReview  = {
                ...review,
                content,
                score
            }
            editReview(user._id, updatedReview, review._id)
                .then(() => {
                    setUpdate(true);
                    toggleForm();
                })
                .catch(err => console.log(err))
        } else {
            const newReview  = {
                author: user.username,
                content,
                movieId,
                score
            }
            addReview(user._id, newReview).then(res => toggleForm()).catch(err => console.log(err))
        }
    }

    return (
        <div>
            <form autoComplete="off" className={classes.root}>
                <TextField
                    InputProps={{className: classes.scoreField}}
                    classes={{root: classes.scoreContainer}}
                    value={score}
                    id="score"
                    label="Score"
                    type="number"
                    variant="outlined"
                    onChange={(ev) => setScore(ev.target.value)}
                />
                <TextField
                    InputProps={{className: classes.textField}}
                    value={content}
                    id="content"
                    label="Review"
                    type="text"
                    variant="outlined"
                    multiline
                    onChange={(ev)  => setContent(ev.target.value)}
                />
                <Button variant="outlined" color="primary" onClick={handleSubmit}>
                    Save
                </Button>
            </form>
        </div>
    );
}

export default ReviewFormComponent;