import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {makeStyles} from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px 20px',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center',
        height: 240
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        color: 'red',
        border: '1px solid red',
        padding: '9px 22px',
        margin: 52,
        borderRadius: 4,
        textTransform: 'uppercase',
        overflowY: 'none'
    }
}))

const AuthenticateDialog = props => {
    const classes = useStyles();
    const { onClose, open } = props;

    return (
        <Dialog onClose={() => onClose()} aria-labelledby="simple-dialog-title" open={open} classes={{paper:classes.root}}>
            <DialogTitle id="simple-dialog-title">To leave a review, you must be a registered user</DialogTitle>
            <DialogContent className={classes.buttonsContainer}>
                <Link to="/login" className={classes.button}>Login</Link>
                <Link to="/signup" className={classes.button}>Signup</Link>
            </DialogContent>
        </Dialog>
    );
};

export default AuthenticateDialog;