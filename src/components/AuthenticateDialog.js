import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {makeStyles} from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogActions from "@material-ui/core/DialogActions";


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
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: 'red',
        border: '1px solid red',
        padding: '9px 22px',
        borderRadius: 4,
        textTransform: 'uppercase',
        overflowY: 'none'
    },
    title: {
        padding: '0 0 16px 0',
        textAlign: 'end',
        width: '100%'
    }
}))

const AuthenticateDialog = ({message, onClose, open}) => {
    const classes = useStyles();

    return (
        <Dialog onClose={() => onClose()} aria-labelledby="simple-dialog-title" open={open} classes={{paper:classes.root}}>
            <DialogTitle classes={{root: classes.title}}>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <Close />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent>
                {message}
            </DialogContent>
            <DialogActions classes={{root: classes.buttonsContainer}}>
                <Link to="/login" className={classes.button}>Login</Link>
                <Link to="/signup" className={classes.button}>Signup</Link>
            </DialogActions>
        </Dialog>
    );
};

export default AuthenticateDialog;