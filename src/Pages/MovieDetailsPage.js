import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getMovie} from "../services/MoviesService";
import {getReviewsByMovie} from "../services/ReviewService";
import ReviewsComponent from "../components/ReviewsComponent";


const MovieDetailsPage = () => {
    const [ movie, setMovie ] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        getMovie(movieId).then(movie => setMovie(movie));
    }, []);


    return (
        <div>
            {Object.keys(movie).length > 0 && (
                <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}}>
                    <span>{movie.title}</span>
                    <span>{movie.vote_average}</span>
                    <span>{movie.primary_release_year}</span>
                    <span>{movie.with_cast}</span>
                    <span>{movie.overview}</span>
                    <ReviewsComponent/>
                </div>
            )}
        </div>
    );
}

export default MovieDetailsPage;