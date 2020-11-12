import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import AllMoviesPage from "../Pages/AllMoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage";
import NowPlayingPage from "../Pages/NowPlayingPage";
import Profile from "../Pages/Profile";

const Routes = () => (
    <Switch>
        <PublicRoute exact path='/' Component={Home} />
        <PublicRoute exact path='/login' Component={LoginPage} hideNav/>
        <PublicRoute exact path="/signup" Component={SignupPage} hideNav/>
        <PublicRoute exact path="/all-movies" Component={AllMoviesPage} />
        <PublicRoute exact path="/movie-details/:movieId" Component={MovieDetailsPage} />
        <PublicRoute exact path="/now-playing" Component={NowPlayingPage} />

        <ProtectedRoute exact path="/movie-details/:movieId/reviews/:reviewId/edit" Component={MovieDetailsPage} />
        <ProtectedRoute exact path="/profile" Component={Profile} />

        {/*/!*  Backlog  *!/*/}
        {/*<Route exact path="/fun-facts" render={() => <FunFacts />} />*/}
        {/*<Route exact path="/random-movie" render={() => <RandomMovie />} />*/}
        {/*<Route exact path="/must-watch" render={() => <MustWatch />} />*/}
        {/*<Route exact path="/about" render={() => <About />} />*/}
    </Switch>
);

export default Routes;