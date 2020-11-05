import React, {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {searchMovie} from "../services/MoviesService";
import TextField from "@material-ui/core/TextField";

const SearchComponent = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);

    const search = (ev, query) => {
        searchMovie(query).then(movies => setSearchedMovies(movies))
    }

    return (
        <div id="search">
            <Autocomplete
                id="search-box"
                options={searchedMovies}
                onInputChange={(ev, value) => search(ev, value)}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search a movie..." variant="outlined" />}
                open={searchedMovies.length}
                onBlur={() => setSearchedMovies([])}
            />
        </div>
    );
}

export default SearchComponent;