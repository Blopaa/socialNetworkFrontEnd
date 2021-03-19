import styled from '@emotion/styled';
import React, {createContext, useContext, useReducer} from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import authReducer from "../reducers/authReducer";
import AuthRoutes from "./authRoutes";
import OtherRoutes from "./otherRoutes";

  const Nav = styled.nav`
    width: 100%;
    height: 6.625rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;
  `

const Router = () => {

    const [state, dispatch] = useReducer(authReducer, {token: undefined});
    const AuthContext = createContext({state, dispatch});

    return (
        <BrowserRouter>
        <div style={{minWidth: '100vw', minHeight: '100vh'}}>
          <AuthContext.Provider value={{state, dispatch}}>
              <Nav/>
              <Switch>
                  {state.token ? <OtherRoutes/> : <AuthRoutes/>}
              </Switch>
          </AuthContext.Provider>
        </div>
      </BrowserRouter>
    )
}

export default Router
