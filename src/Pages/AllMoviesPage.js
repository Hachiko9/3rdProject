import React, {useEffect, useState} from 'react';
import AllMoviesComponent from "../components/AllMoviesComponent";
import {getMovies, getMoviesByFilter} from "../services/MoviesService";
import FilterComponent from "../components/FilterComponent";

const AllMoviesPage = () => {
    const [ allMovies, setAllMovies ] = useState([]);
    const [ selectedGenres, setGenre ] = useState([]);

    useEffect(() => {
        getMovies().then(movies => setAllMovies(movies));
    }, []);

    useEffect(() => {
        console.log(selectedGenres);
        if (selectedGenres.length > 0) {
            const filter = {
                'with_genres': [selectedGenres]
            };

            getMoviesByFilter(filter).then(movies => setAllMovies(movies));
        }
    }, [selectedGenres]);

    return (
        <div>
            <FilterComponent selectedGenres={selectedGenres} setGenre={setGenre} />
            <AllMoviesComponent movies={allMovies}/>
        </div>
    );
}

export default AllMoviesPage;