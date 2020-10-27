import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getMovie} from "../services/MoviesService";
import {getReviewsByMovie} from "../services/ReviewService";
import AllReviewsComponent from "../components/AllReviewsComponent";


const MovieDetailsPage = () => {
    const [ movie, setMovie ] = useState({});
    const [ reviews, setReviews ] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        getMovie(movieId).then(movie => setMovie(movie));
        getReviewsByMovie(movieId).then(movie => setReviews(movie));
    }, []);

    console.log(reviews);

    return (
        <div>
            {Object.keys(movie).length > 0 && (
                <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}}>
                    <span>{movie.title}</span>
                    <span>{movie.vote_average}</span>
                    <span>{movie.primary_release_year}</span>
                    <span>{movie.with_cast}</span>
                    <span>{movie.overview}</span>
                    <AllReviewsComponent reviews={reviews}/>
                </div>
            )}
        </div>
    );
}

export default MovieDetailsPage;