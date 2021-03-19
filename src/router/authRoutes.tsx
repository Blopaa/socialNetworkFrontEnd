import React from 'react';
import SignUpPage from "../pages/auth/SignUp";
import {Redirect, Route, Switch} from "react-router-dom";

const AuthRoutes = () => {

    return (
        <>
            <Route exact path="/auth/signup" component={SignUpPage}/>
            <Route path="**"><Redirect to="/auth/signup"/></Route>
        </>
    );
};

export default AuthRoutes;
