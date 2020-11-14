import React from "react";
import {Route, Redirect} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const ProtectedRoute = ({ Component, ...rest }) => {
    if (rest.user) {
        return (
            <div>
                <NavbarComponent {...rest} />
                <Route {...rest} render={(otherProps) => (<Component {...otherProps} {...rest} />)}/>
            </div>
        );
    }

    return <Redirect to={{ pathname: '/login' }} />;
};

export default ProtectedRoute;