import styled from '@emotion/styled';
import React, {useContext, useEffect, useReducer} from 'react'
import {
    BrowserRouter, Redirect, Route,
    Switch,
} from "react-router-dom";
import authReducer from "../reducers/authReducer";
import AuthRoutes from "./authRoutes";
import OtherRoutes from "./otherRoutes";
import {AuthContext} from "../contexts/authContext";
import _404Page from "../pages/404";

const Router = () => {
    let init = () => {
        let token = localStorage.getItem("token");
        if (token) {
            return JSON.parse(token);
        }
        return {token: undefined};
    };

    const [authState, authDispatch] = useReducer(authReducer, {token: undefined}, init);

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(authState))
    }, [authState]);


    return (
        <BrowserRouter>
            <div style={{minWidth: '100vw', minHeight: '100vh', backgroundColor: 'rgb(232, 239, 245)'}}>
                    <AuthContext.Provider value={{authState, authDispatch}}>
                            {authState.token ? <OtherRoutes/> : <AuthRoutes/>}
                    </AuthContext.Provider>
            </div>
        </BrowserRouter>
    )
}

export default Router
