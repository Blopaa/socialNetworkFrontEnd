import React from 'react';
import {authInitialState} from "../../types/generic";

const AuthReducer = (state: authInitialState = {}, action: { type?: authReducerTypes, payload?: string }): authInitialState => {
    switch (action.type) {
        case "LOG_IN":
            state.token = action.payload;
            return state;
        case "LOG_OUT":
            state.token = undefined;
            return state
        default:
            throw new Error("unknown action type");
    }
};

export default AuthReducer;
