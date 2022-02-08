import React from "react";
import { Route, Navigate, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';

export function IsUserRedirect({ user, loggedInPath, children, ...rest}) {
    return (
        <Route 
         {...rest} 
        render={() => {
            if(!user) {
                return children;
            }

            if(user) {
                console.log('I am a user', loggedInPath)
                return (
                    <Navigate to={{
                        pathname: loggedInPath,
                    }}
                    />
                );
            }
            return null;
        }} 
        />
    );
}

export function ProtectedRoute({ user, children, ...rest }) {
    console.log('User is:', user)
    //return user ? children : <Navigate to="/signin"/>

    if(!user) {
        return <Navigate to="/signin"/>
    }

    if(user) {
        return <Navigate to={ROUTES.BROWSE}/>
    }

    
}