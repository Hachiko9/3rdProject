import React, {useEffect, useState} from 'react';
import NowPlayingComponent from "../components/NowPlayingComponent";
import {nowPlaying} from "../services/MoviesService";

const NowPlayingPage = () => {
    const [ npMovies, setNPMovies ] = useState([]);

    useEffect(() => {
        nowPlaying().then(movies => setNPMovies(movies));
    }, []);

    return (
        <div>
            <NowPlayingComponent movies={npMovies}/>
        </div>
    );
}

export default NowPlayingPage;