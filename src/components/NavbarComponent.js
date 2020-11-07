import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SearchComponent from "./SearchComponent";
import {logout} from "../services/UserService";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'sticky',
        top: -146,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    actionsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    link: {
        fontSize: 22,
        paddingRight: 20
    }
}));

const NavbarComponent = ({path, user}) => {
    const classes = useStyles();
    const isMovieDetailPage = (/(movie-details)/gi).test(path);

    const handleLogout = () => {
        logout().then(() => document.location.reload()).catch(err => console.log(err));
    }

    return (
        <div className={classes.root} style={{backgroundColor: isMovieDetailPage ? 'transparent' : '#252525'}}>
            <AppBar position="static" color={'transparent'} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Link to={'/'}>
                        <img height={140} src={'/logo.png'} alt=""/>
                    </Link>
                    <div className={classes.actionsContainer}>
                        <div>
                            <Link to="/now-playing" className={classes.link}>
                                Now Playing
                            </Link>
                            <Link to="/all-movies" className={classes.link}>
                                All Movies
                            </Link>
                            {user && (
                                <Link to="/profile" className={classes.link}>
                                    Profile
                                </Link>
                            )}
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {user && (
                                <IconButton aria-label="display more actions" edge="end" color="inherit" onClick={handleLogout}>
                                    Logout
                                </IconButton>
                            )}
                            {!user && (
                                <div>
                                    <Link to="/login" className={classes.link}>
                                        Login
                                    </Link>
                                    <Link to="/signup" className={classes.link}>
                                        Signup
                                    </Link>
                                </div>
                            )}
                            <IconButton aria-label="search" color="inherit">
                                <SearchComponent />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavbarComponent;