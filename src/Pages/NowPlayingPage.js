import React, {useEffect, useState} from 'react';
import NowPlayingComponent from "../components/NowPlayingComponent";
import {getMoviesByFilter, nowPlaying} from "../services/MoviesService";
import FilterComponent from "../components/FilterComponent";

const NowPlayingPage = () => {
    const [ npMovies, setNPMovies ] = useState([]);
    const [ selectedGenres, setGenre ] = useState([]);

    useEffect(() => {
        nowPlaying().then(movies => setNPMovies(movies));
    }, []);

    useEffect(() => {
        if (selectedGenres.length > 0) {
            const filter = {
                'with_genres': [selectedGenres]
            };

            getMoviesByFilter(filter).then(movies => setNPMovies(movies));
        }
    }, [selectedGenres]);

    return (
        <div>
            <FilterComponent selectedGenres={selectedGenres} setGenre={setGenre}/>
            <NowPlayingComponent movies={npMovies}/>
        </div>
    );
}

export default NowPlayingPage;