import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from './components/Carousel'
import NowPlaying from "./components/NowPlaying";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import {ThemeProvider} from  '@material-ui/core/styles'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Pages/Home";

function App() {

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
              <Navbar />
              <BrowserRouter>
                  <Route exact path="/" render={() => < Home/>} />
                  {/*<Route exact path="/all-movies" render={() => <AllMovies />} />*/}
                  {/*<Route exact path="/reviews" render={() => <Reviews />} />*/}
                  {/*<Route exact path="/reviews/add" render={() => <ReviewAdd />} />*/}
                  {/*<Route exact path="/profile" render={() => <Profile />} />*/}
                  {/*<Route exact path="/profile/reviews" render={() => <PersonalReviews />} />*/}
                  {/*<Route exact path="/auth" render={() => <Auth />} />*/}
                  {/*/!*  Backlog  *!/*/}
                  {/*<Route exact path="/fun-facts" render={() => <FunFacts />} />*/}
                  {/*<Route exact path="/random-movie" render={() => <RandomMovie />} />*/}
                  {/*<Route exact path="/must-watch" render={() => <MustWatch />} />*/}
                  {/*<Route exact path="/about" render={() => <About />} />*/}
                  {/*<Route exact path="/now-playing" render={() => <NowPlaying />} />*/}
              </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

export default App;
