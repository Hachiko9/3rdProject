import React, {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {searchMovie} from "../services/MoviesService";
import TextField from "@material-ui/core/TextField";

const SearchComponent = ({movies}) => {
    const [searchedMovies, setSearchedMovies] = useState([]);

    const search = (ev, query) => {
        console.log('query => ', query)
        searchMovie(query)
            .then(movies => setSearchedMovies(movies))
    }

    return (
        <div id="search">
            <Autocomplete
                id="combo-box-demo"
                options={searchedMovies}
                onInputChange={(ev, value) => search(ev, value)}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
        </div>
    );
}

export default SearchComponent;