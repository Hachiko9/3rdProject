import React from 'react';
import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from './components/CarouselComponent'
import NowPlayingComponent from "./components/NowPlayingComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import {ThemeProvider} from  '@material-ui/core/styles'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import NowPlayingPage from "./Pages/NowPlayingPage";
import AllMoviesPage from "./Pages/AllMoviesPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ReviewFormPage from "./Pages/ReviewFormPage";

function App() {

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
              <BrowserRouter>
                  <NavbarComponent />
                  <Route exact path="/" render={() => < Home/>} />
                  <Route exact path="/all-movies" render={() => <AllMoviesPage />} />
                  <Route exact path="/movie-details/:movieId" render={() => <MovieDetailsPage />} />
                  <Route exact path="/:movieId/reviews/add" render={() => <ReviewFormPage />} />
                  <Route exact path="/:movieId/reviews/:reviewId/edit" render={() => <ReviewFormPage />} />
                  <Route exact path="/profile" render={() => <Profile />} />
                  <Route exact path="/login" render={() => <LoginPage />} />
                  <Route exact path="/signup" render={() => <SignupPage />} />
                  <Route exact path="/now-playing" render={() => <NowPlayingPage />} />
                  {/*/!*  Backlog  *!/*/}
                  {/*<Route exact path="/fun-facts" render={() => <FunFacts />} />*/}
                  {/*<Route exact path="/random-movie" render={() => <RandomMovie />} />*/}
                  {/*<Route exact path="/must-watch" render={() => <MustWatch />} />*/}
                  {/*<Route exact path="/about" render={() => <About />} />*/}
              </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

export default App;
