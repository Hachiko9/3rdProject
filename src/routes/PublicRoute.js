import React from "react";
import {Route} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const PublicRoute = ({Component, hideNav, ...rest}) => (
    <div>
        {!hideNav && <NavbarComponent {...rest} />}
        <Route {...rest} render={(otherProps) => <Component {...otherProps} {...rest} />}/>
    </div>
);
export default PublicRoute;