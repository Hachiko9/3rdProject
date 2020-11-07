import React from "react";
import {Route, Redirect} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const ProtectedRoute = ({ Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        return (
            <div>
                <NavbarComponent {...rest} user={user}/>
                <Route {...rest} render={(otherProps) => (<Component {...otherProps} user={user}/>)}/>
            </div>
        );
    }

    return <Redirect to={{ pathname: '/login' }} />;
};

export default ProtectedRoute;