import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks';

export default function App() {
  //const { user } = useAuthListener();
  const user = null;

  return (
    <Router>
      <Routes>
        <Route user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} element={<Signin />}>
        </Route>
        <Route user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} element={<Signup />}>
        </Route>
        <Route user={user} path={ROUTES.BROWSE} element={<Browse />}>
        </Route>
        <Route user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

