import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogins } from '../utils'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogins()?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};


export default PrivateRoute;