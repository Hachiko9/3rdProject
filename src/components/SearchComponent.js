import React, {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {searchMovie} from "../services/MoviesService";
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router-dom";

const SearchComponent = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [movieId, setMovieId] = useState(null);
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (movieId) {
            setMovieId(null);
            setSearchedMovies([]);
        } else {
            setSearchedMovies([]);
        }
    }, [movieId])

    const search = (query) => {
        if (query) {
            searchMovie(query).then(movies => setSearchedMovies(movies))
        }
    }

    const handleOnChange = (event, value) => {
        if (value) {
            setMovieId(value.id);
        }
    }

    const handleInputChange = (event, value) => {
        setInputValue(value);
        search(value);
    }

    return (
        <div id="search">
            <Autocomplete
                value={value}
                inputValue={inputValue}
                id="search-box"
                options={searchedMovies}
                onInputChange={handleInputChange}
                getOptionLabel={(option) => option.title || ''}
                renderInput={(params) => <TextField {...params} label="Search a movie..." variant="outlined" />}
                open={(console.log()) && searchedMovies.length > 0}
                onBlur={() => setSearchedMovies([])}
                onChange={handleOnChange}
                noOptionsText="Type the movie title to search"
                blurOnSelect
                clearOnBlur={true}
                clearOnEscape={true}
                style={{ width: 300 }}
            />

            { movieId && <Redirect to={`/movie-details/${movieId}`}/> }
        </div>
    );
}

export default SearchComponent;