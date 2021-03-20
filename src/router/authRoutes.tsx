import React from 'react';
import SignUpPage from "../pages/auth/SignUp";
import {Redirect, Route, Switch} from "react-router-dom";
import SignInFormMolecule from "../components/molecules/signInForm";
import SignInPage from "../pages/auth/signin";

const AuthRoutes = () => {

    return (
        <Switch>
            <Route exact path="/auth/signup" component={SignUpPage}/>
            <Route exact path="/auth/signin" component={SignInPage}/>
            <Route path="**"><Redirect to="/auth/signup"/></Route>
        </Switch>
    );
};

export default AuthRoutes;
