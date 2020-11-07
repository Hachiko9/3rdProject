import React, {useEffect, useState} from 'react';
import ReviewsComponent from "../components/ReviewsComponent";
import {getReviewsByUser} from "../services/ReviewService";

const Profile = ({user}) => {
    const [ reviews, setReviews ] = useState({});

    useEffect(() => {
        getReviewsByUser(user._id).then(reviews => setReviews(reviews)).catch(err => console.log(err))
    }, []);

    return (
        <div>
            <ReviewsComponent reviews={reviews}/>
        </div>
    );
}

export default Profile;