import {createContext} from "react";
import {authInitialState} from "../../types/generic";

export const AuthContext = createContext<{state?:  authInitialState, dispatch?: React.Dispatch<Object>}>({});