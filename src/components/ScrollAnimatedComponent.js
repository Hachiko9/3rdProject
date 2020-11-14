import React, {useEffect, useState} from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        top: '80%',
        zIndex: 10,
        textAlign: 'center',
        '& > *': {
            fontSize: '5em',
            position: 'relative',
            color: theme.palette.primary.main,
            animationName: 'drop',
            animationDuration: '1s',
            animationTimingFunction: 'linear',
            animationDelay: 0,
            animationIterationCount: 'infinite',
            animationPlayState: 'running'
        }
    }
}));

const ScrollAnimatedComponent = () => {
    const classes = useStyles();
    const [isArrowVisible, setIsArrowVisible] = useState(true);

    useEffect(() => {
        document.getElementById('movie-details-pg').addEventListener('scroll', listenForScroll, false);
    }, []);

    const listenForScroll = (ev) => {
        const {scrollTop} = ev.target;

        if (scrollTop > 200 && isArrowVisible) {
            setIsArrowVisible(false);
        }
    }

    return (
        <>
            <div className={classes.root} style={{visibility: isArrowVisible ? 'visible' : 'hidden'}}>
                <KeyboardArrowDownIcon/>
            </div>
        </>
    )
}

export default ScrollAnimatedComponent;