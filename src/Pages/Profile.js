import React, {useEffect, useState} from 'react';
import AllMoviesComponent from "../components/AllMoviesComponent";
import {getMovies, getMoviesByFilter} from "../services/MoviesService";
import FilterComponent from "../components/FilterComponent";
import AllReviewsComponent from "../components/AllReviewsComponent";

const Profile = () => {

    return (
        <div>
            hey
            <AllReviewsComponent />
        </div>
    );
}

export default Profile;