import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes/Routes";

import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import './App.css';
import {checkSession} from "./services/UserService";

function App() {
    const [user, setUser] = useState({});

    useEffect(() => {
        checkSession().then(user => setUser(user));
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <BrowserRouter>
                    <Routes user={user} setUser={setUser}/>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
