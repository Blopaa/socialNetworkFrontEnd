import styled from '@emotion/styled';
import React, {useContext, useEffect, useReducer} from 'react'
import {
    BrowserRouter,
    Switch,
  } from "react-router-dom";
import authReducer from "../reducers/authReducer";
import AuthRoutes from "./authRoutes";
import OtherRoutes from "./otherRoutes";
import {AuthContext} from "../contexts/authContext";

const Router = () => {
    let init = () => {
        let token = localStorage.getItem("token");
        if(token){
            return JSON.parse(token);
        }
        return {token: undefined};
    };

    const [state, dispatch] = useReducer(authReducer, {token: undefined}, init);

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(state))
    }, [state]);


    return (
        <BrowserRouter>
        <div style={{minWidth: '100vw', minHeight: '100vh'}}>
          <AuthContext.Provider value={{state, dispatch}}>
              <Switch>
                  {state.token ? <OtherRoutes/> : <AuthRoutes/>}
              </Switch>
          </AuthContext.Provider>
        </div>
      </BrowserRouter>
    )
}

export default Router
