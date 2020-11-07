import React from "react";
import {Route} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const PublicRoute = ({Component, hideNav, ...rest}) => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            {!hideNav && <NavbarComponent {...rest} user={user}/>}
            <Route {...rest} render={(otherProps) => <Component {...otherProps} user={user}/>}/>
        </div>
    );
};

export default PublicRoute;