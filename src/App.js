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

function App() {

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
              <NavbarComponent />
              <BrowserRouter>
                  <Route exact path="/" render={() => < Home/>} />
                  <Route exact path="/all-movies" render={() => <AllMoviesPage />} />
                  <Route exact path="/movie-details/:movieId" render={() => <MovieDetailsPage />} />
                  {/*<Route exact path="/reviews" render={() => <Reviews />} />*/}
                  {/*<Route exact path="/reviews/add" render={() => <ReviewAdd />} />*/}
                  <Route exact path="/profile" render={() => <Profile />} />
                  {/*<Route exact path="/profile/reviews" render={() => <PersonalReviews />} />*/}
                  <Route exact path="/login" render={() => <LoginPage />} />
                  <Route exact path="/signup" render={() => <SignupPage />} />
                  {/*/!*  Backlog  *!/*/}
                  {/*<Route exact path="/fun-facts" render={() => <FunFacts />} />*/}
                  {/*<Route exact path="/random-movie" render={() => <RandomMovie />} />*/}
                  {/*<Route exact path="/must-watch" render={() => <MustWatch />} />*/}
                  {/*<Route exact path="/about" render={() => <About />} />*/}
                  <Route exact path="/now-playing" render={() => <NowPlayingPage />} />
              </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

export default App;
