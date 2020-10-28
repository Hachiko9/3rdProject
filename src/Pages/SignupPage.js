import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {signup} from "../services/UserService";
import Button from "@material-ui/core/Button";

const SignupPage = () => {
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    let history = useHistory();

    const checkEmail = () => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return !regEx.test(email) && email.length !== 0;
    }
//FIXME add more rules for password and check for unique username
    const checkPassword = () => {
        return password.length <= 8 && password.length !== 0;
    }

    const handleSubmit = () => {
        signup(email, password, username)
            .then(() => history.push('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form autoComplete="off">
                <TextField id="username" label="Username" variant="outlined" onChange={(ev) => setUsername(ev.target.value)} />
                <TextField id="email" label="Email" type="email" variant="outlined" error={checkEmail()} onChange={(ev) => setEmail(ev.target.value)} />
                <TextField id="password" label="Password" type="password" variant="outlined" error={checkPassword()}  onChange={(ev) => setPassword(ev.target.value)} />
                <Button variant="outlined" color="primary" onClick={handleSubmit}>
                    Signup
                </Button>
            </form>
        </div>
    );
}

export default SignupPage;