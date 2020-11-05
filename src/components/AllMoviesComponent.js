import React from 'react';
import MovieBoxComponent from "./MovieBoxComponent";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "./DividerComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '90%',
        marginTop: 180
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '1rem',
        marginBottom: 32
    },
    title: {
        margin: 50,
        fontSize: 36,
        fontWeight: 400,
        marginTop: 12
    }
}));

const AllMoviesComponent = ({movies}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Divider />
            <h2 className={classes.title}>All Movies</h2>
            <div className={classes.grid}>
                {movies.map(movie =>
                    <MovieBoxComponent key={movie.id} {...{movie}} />
                )}
            </div>
        </div>
    );
}

export default AllMoviesComponent;