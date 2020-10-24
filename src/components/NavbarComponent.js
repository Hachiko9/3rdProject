import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.default
    },
    actionsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    link: {
        paddingRight: 20,
        fontSize: 22,
        color: 'white'
    }
}));

const NavbarComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Link href={'/'}>
                        <Typography className={classes.title} variant="h5" >
                            Material-UI
                        </Typography>
                    </Link>
                    <div className={classes.actionsContainer}>
                        <div>
                            <Link color="secondary" href="/now-playing" className={classes.link}>
                                Now Playing
                            </Link>
                            <Link color="secondary" href="#" className={classes.link}>
                                Test
                            </Link>
                            <Link color="secondary" href="#" className={classes.link}>
                                Test
                            </Link>
                            <Link color="secondary" href="#" className={classes.link}>
                                Test
                            </Link>
                        </div>
                        <div>
                            <IconButton aria-label="search" color="inherit" noWrap>
                                <SearchIcon />
                            </IconButton>
                            <IconButton aria-label="display more actions" edge="end" color="inherit" noWrap>
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavbarComponent;