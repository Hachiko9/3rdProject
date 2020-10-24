import React, {useEffect, useState} from 'react';
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {getGenres} from '../services/MoviesService';

const FilterComponent = ({selectedGenres, setGenre}) => {
    const [ genres, setGenres ] = useState([]);

    useEffect(() => {
        getGenres().then(genres => setGenres(genres));
    }, []);

    return (
        <div>
            <FormControl>
                <InputLabel id="demo-customized-select-label">Genre</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedGenres}
                    multiple
                    onChange={(ev) => setGenre(ev.target.value)}
                >
                    {genres.map(genre =>
                        <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterComponent;