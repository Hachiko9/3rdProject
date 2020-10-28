import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login} from "../services/UserService";

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    let history = useHistory();

    const handleSubmit = () => {
        login(email, password)
            .then(() => history.push('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form autoComplete="off">
                <TextField id="email" label="Email" type="email" variant="outlined" onChange={(ev) => setEmail(ev.target.value)} />
                <TextField id="password" label="Password" type="password" variant="outlined" onChange={(ev) => setPassword(ev.target.value)} />
                <Button variant="outlined" color="primary" onClick={handleSubmit}>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginPage;