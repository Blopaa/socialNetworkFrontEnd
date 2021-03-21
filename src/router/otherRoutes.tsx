import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import HomePage from "../pages/home";

const OtherRoutes = () => {
    return (
        <>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/user/:user" component={HomePage}/>
            <Route path="**"><Redirect to="/home"/></Route>
        </>
    );
};

export default OtherRoutes;
