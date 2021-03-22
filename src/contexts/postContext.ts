import {createContext} from "react";
import {post, postInitialState} from "../../types/generic";
import {postReducerTypes} from "../../types/reducerTypes";

export const PostContext = createContext<{postState?:  postInitialState, postDispatch?: React.Dispatch<{ type?: postReducerTypes, payload?: post |post[]| number }>}>({})