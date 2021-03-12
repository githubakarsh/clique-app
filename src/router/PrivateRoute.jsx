import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PathConstants } from './AppRouterConstants';


const PrivateRoute = ({component: Component, token, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
            : <Redirect to={PathConstants.LOGIN} />
        )} />
    );
};

export default PrivateRoute;