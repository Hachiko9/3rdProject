import React, {useEffect, useState} from 'react';
import NowPlayingComponent from "../components/NowPlayingComponent";
import {nowPlaying} from "../services/MoviesService";
import {getMovies} from "../services/MoviesService";
import Link from "@material-ui/core/Link";
import AllMoviesComponent from "../components/AllMoviesComponent";

const Home = () => {
    const [ npMovies, setNPMovies ] = useState([]);
    const [ allMovies, setAllMovies ] = useState([]);

    useEffect(() => {
        nowPlaying().then(movies => setNPMovies(movies.slice(0,12)));
        getMovies().then(movies => setAllMovies(movies.slice(0,12)));
    }, []);

    return (
        <div id="home">
            <section>
                <NowPlayingComponent movies={npMovies}/>
                <Link href={'/now-playing'}>See more...</Link>
            </section>
            <section>
                <AllMoviesComponent movies={allMovies}/>
                <Link href={'/all-movies'}>See more...</Link>
            </section>
        </div>
    );
}

export default Home;