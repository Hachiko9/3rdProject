import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getReviewsByUser} from "../services/ReviewService";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import UserReviewsComponent from "../components/UserReviewsComponent";
import FavouriteMoviesComponent from "../components/FavouriteMoviesComponent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from 'react-swipeable-views';
import TabContext from "@material-ui/lab/TabContext";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        background: 'url(https://tiahlearmond3225.files.wordpress.com/2014/10/american-beauty-original.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        height: '100vh',
    },
    movieContainer: {
        background: 'rgba(0, 0, 0, .8)',
        borderRadius: 8,
        marginBottom: 32,
        display: 'flex',
        height: '80vh',
        margin: 'auto',
        marginTop: 150,
        overflow: 'scroll',
        padding: 24,
        position: 'relative',
        width: '80%',
        flexDirection: 'column'
    }
}));

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

const Profile = ({user}) => {
    const [ reviews, setReviews ] = useState({});
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isLoggedIn = user && Object.keys(user).length > 0;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    useEffect(() => {
        getReviewsByUser(user.username)
            .then(reviews => setReviews(reviews))
            .catch(err => console.log(err))
    }, [user]);

    return (
        <div className={classes.root}>
            {isLoggedIn && <div className={classes.movieContainer}>
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        style={{height: 48, marginBottom: 16}}
                    >
                        <Tab label="My reviews"/>
                        <Tab label="My favourite movies"/>
                        <Tab label="My details"/>
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel index={0} dir={theme.direction} value={value}>
                            {reviews.length > 0 &&
                            <UserReviewsComponent user={user} reviewsByUser={reviews}/>
                            }
                        </TabPanel>
                        <TabPanel index={1} dir={theme.direction} value={value}>
                            {user.favouriteMoviesIds.length > 0 &&
                            <FavouriteMoviesComponent user={user}/>
                            }
                        </TabPanel>
                        {/*<TabPanel index={2} dir={theme.direction} value={value}>
                        Item Three
                    </TabPanel>*/}
                    </SwipeableViews>
                </TabContext>
            </div>}
        </div>
    );
}

TabContext.propTypes = {
    index: PropTypes.any,
    value: PropTypes.any
};


TabPanel.propTypes = {
    index: PropTypes.any,
    value: PropTypes.any
}

export default Profile;