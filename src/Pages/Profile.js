import React, {useEffect, useState} from 'react';
import {getReviewsByUser} from "../services/ReviewService";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import UserReviewsComponent from "../components/UserReviewsComponent";
import FavouriteMovieComponent from "../components/FavouriteMovieComponent";
import FavouriteMoviesComponent from "../components/FavouriteMoviesComponent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from 'react-swipeable-views';
import TabPanel from "@material-ui/lab/TabPanel";
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

const Profile = ({user}) => {
    const [ reviews, setReviews ] = useState({});
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

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
    }, []);

    console.log('user', user);
    return (
        <div className={classes.root}>
            <div className={classes.movieContainer}>
                <TabContext value={value}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={{height: 48, marginBottom: 16, padding: '0 16px'}}
                >
                    <Tab label="My reviews" />
                    <Tab label="My favourite movies" />
                    <Tab label="My details" />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        {reviews.length > 0 &&
                            <UserReviewsComponent user={user} reviewsByUser={reviews}/>
                        }
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        {user.favouriteMoviesIds.length > 0 &&
                        <FavouriteMoviesComponent user={user}/>
                        }
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
                </TabContext>



            </div>
        </div>
    );
}

export default Profile;