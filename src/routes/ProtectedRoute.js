import React from "react";
import {Route, Redirect} from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const ProtectedRoute = ({ Component }) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        return (
            <div>
                <NavbarComponent user={user}/>
                <Route render={(otherProps) => (<Component {...otherProps} user={user}/>)}/>
            </div>
        );
    }

    return <Redirect to={{ pathname: '/login' }} />;
};

export default ProtectedRoute;