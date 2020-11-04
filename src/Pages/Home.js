import React, {useEffect, useState} from 'react';
import NowPlayingComponent from "../components/NowPlayingComponent";
import {nowPlaying} from "../services/MoviesService";
import {getMovies} from "../services/MoviesService";
import AllMoviesComponent from "../components/AllMoviesComponent";
import {Link} from "react-router-dom";

const Home = () => {
    const [ npMovies, setNPMovies ] = useState([]);
    const [ allMovies, setAllMovies ] = useState([]);

    useEffect(() => {
        nowPlaying().then(movies => setNPMovies(movies.slice(0,12)));
        getMovies().then(movies => setAllMovies(movies.slice(0,12)));
    }, []);

    return (
        <div id="home" style={{textAlign: 'center'}}>
            <section>
                <NowPlayingComponent movies={npMovies}/>
                <Link to={'/now-playing'}>See more...</Link>
            </section>
            <section>
                <AllMoviesComponent movies={allMovies}/>
                <Link to={'/all-movies'}>See more...</Link>
            </section>
        </div>
    );
}

export default Home;