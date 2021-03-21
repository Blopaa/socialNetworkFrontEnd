import {createContext} from "react";
import {authInitialState} from "../../types/generic";
import {authReducerTypes} from "../../types/reducerTypes";

export const AuthContext = createContext<{authState?:  authInitialState, authDispatch?: React.Dispatch<{ type?: authReducerTypes, payload?: string }>}>({});