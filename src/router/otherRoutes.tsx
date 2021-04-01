import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import HomePage from "../pages/home";
import PostPage from "../pages/post/post";

const OtherRoutes = () => {
    return (
        <>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/post/:id" component={PostPage}/>
            {/*<Route exact path="/user/:user" component={HomePage}/>*/}
            <Route path="**"><Redirect to="/home"/></Route>
        </>
    );
};

export default OtherRoutes;
