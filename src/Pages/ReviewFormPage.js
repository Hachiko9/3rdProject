import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addReview, editReview} from "../services/ReviewService";

const ReviewFormPage = ({review}) => {
    const [ content, setContent ] = useState('');
    const [ score, setScore ] = useState(null);
    const {movieId} = useParams();

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (review) {
            const updatedReview  = {
                ...review,
                content,
                score
            }
            editReview(user._id, updatedReview, review._id).then(res => console.log(res)).catch(err => console.log(err))
        } else {
            const newReview  = {
                author: user.username,
                content,
                movieId,
                score
            }
            addReview(user._id, newReview).then(res => console.log(res)).catch(err => console.log(err))
        }
    }

    return (
        <div>
            <form autoComplete="off">
                <TextField id="content" label="Review" type="text" variant="outlined" onChange={(ev) => setContent(ev.target.value)} />
                <TextField id="score" label="Score" type="number" variant="outlined" onChange={(ev) => setScore(ev.target.value)} />
                <Button variant="outlined" color="primary" onClick={handleSubmit}>
                    Save
                </Button>
            </form>
        </div>
    );
}

export default ReviewFormPage;