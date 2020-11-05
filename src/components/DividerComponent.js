import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 56,
        height: 8,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 44,
        margin: 'auto'
    }
}));

const Divider = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}/>
    );
}

export default Divider;