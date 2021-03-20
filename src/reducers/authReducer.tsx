import React from 'react';
import {authInitialState} from "../../types/generic";

const AuthReducer = (state: authInitialState = {}, action: { type?: authReducerTypes, payload?: string }): authInitialState => {
    console.log("here")
    switch (action.type) {
        case "LOG_IN":
            return {token: action.payload}
        case "LOG_OUT":
            return {token: undefined}
        default:
            throw new Error("unknown action type");
    }
};

export default AuthReducer;
