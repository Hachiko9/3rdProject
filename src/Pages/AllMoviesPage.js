import React, {useEffect, useState} from 'react';
import AllMoviesComponent from "../components/AllMoviesComponent";
import {getMovies} from "../services/MoviesService";

const AllMoviesPage = () => {
    const [ npMovies, setNPMovies ] = useState([]);

    useEffect(() => {
        getMovies().then(movies => setNPMovies(movies));
    }, []);

    return (
        <div>
            <AllMoviesComponent movies={npMovies}/>
        </div>
    );
}

export default AllMoviesPage;