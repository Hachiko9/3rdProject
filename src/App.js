import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from "./routes/Routes";

import {ThemeProvider} from  '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import './App.css';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
              <BrowserRouter>
                  <Routes />
              </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

export default App;
