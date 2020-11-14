import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {signup} from "../services/UserService";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'url(https://ichef.bbci.co.uk/images/ic/1008xn/p05pg16w.jpg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        justifyContent: 'center',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        padding: 24,
        background: 'rgba(0, 0, 0, .8)',
        marginLeft: 180
    },
    field: {
        margin: 10,
    },
    text: {
        opacity: 0,
        transition: 'opacity .3s',
        position: 'absolute',
        right: '6%',
        top: '15%',
        fontFamily: 'Dancing Script, cursive',
        letterSpacing: 3,
        textShadow: '3px 2px 2px black'
    }
}));


const SignupPage = () => {
    const classes = useStyles();
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

    const handleSubmit = ({setUser}) => {
        signup(email, password, username)
            .then((user) => {
                document.getElementById('text').style.opacity = 1;
                setTimeout(() => {
                    setUser(user);
                    history.push('/');
                }, 1500)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.root}>
            <h1 id="text" className={classes.text}>"Louis, I think this is the beginning of a <br/>beautiful friendship."</h1>
            <form autoComplete="off" className={classes.form}>
                <TextField className={classes.field} id="username" label="Username" variant="outlined" onChange={(ev) => setUsername(ev.target.value)} />
                <TextField className={classes.field} id="email" label="Email" type="email" variant="outlined" error={checkEmail()} onChange={(ev) => setEmail(ev.target.value)} />
                <TextField className={classes.field} id="password" label="Password" type="password" variant="outlined" error={checkPassword()}  onChange={(ev) => setPassword(ev.target.value)} />
                <Button className={classes.field} variant="outlined" color="primary" onClick={handleSubmit}>
                    Signup
                </Button>
                <div style={{margin: 8, textAlign: 'center', fontSize: 14}}>
                    Already have an account?<br/> Go to
                    <Link to="/login" className={classes.link}>
                        &nbsp;login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;