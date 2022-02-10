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
    return (
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return children;
          }
  
          if (!user) {
            return (
              <Navigate
                to={{
                  pathname: 'signin',
                  state: { from: location },
                }}
              />
            );
          }
          return null;
        }}
      />
    );
  }