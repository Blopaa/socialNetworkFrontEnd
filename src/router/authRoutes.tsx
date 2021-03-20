import React from 'react';
import SignUpPage from "../pages/auth/SignUp";
import {Redirect, Route, Switch} from "react-router-dom";
import SignInFormMolecule from "../components/molecules/signInForm";
import SignInPage from "../pages/auth/signin";
import styled from "@emotion/styled";

const AuthRoutes = () => {

    const Nav = styled.nav`
      width: 100%;
      height: 6.625rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
      background-color: #FFFFFF;
    `

    return (
        <>
            <Nav/>
            <Switch>
                <Route exact path="/auth/signup" component={SignUpPage}/>
                <Route exact path="/auth/signin" component={SignInPage}/>
                <Route path="**"><Redirect to="/auth/signup"/></Route>
            </Switch>
        </>
    );
};

export default AuthRoutes;
