import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";

const OtherRoutes = () => {
    return (
        <>
            <Route exact path="/home">
                <div>bla</div>
            </Route>
            <Route path="**"><Redirect to="/home"/></Route>
        </>
    );
};

export default OtherRoutes;
