import React from "react";
import {Route} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const PublicRoute = ({Component, hideNav}) => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            {!hideNav && <NavbarComponent user={user}/>}
            <Route render={(otherProps) => (<Component {...otherProps} user={user}/>)}/>
        </div>
    );
};

export default PublicRoute;