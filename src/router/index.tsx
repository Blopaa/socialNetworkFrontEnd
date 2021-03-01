import styled from '@emotion/styled';
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import SignUpPage from '../pages/auth/SignUp';

  const Nav = styled.nav`
    width: 100%;
    height: 6.625rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;
  `

const Router = () => {
    return (
        <BrowserRouter>
        <div style={{minWidth: '100vw', minHeight: '100vh'}}>
          <Nav>
          </Nav>
          <Switch>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="**"><Redirect to="/signup"></Redirect></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default Router
