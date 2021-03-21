import {post, postInitialState} from "../../types/generic";
import {postReducerTypes} from "../../types/reducerTypes";

const postReducer = (state: postInitialState = [], action: { type?: postReducerTypes, payload?: post | number }): post[] | undefined => {
    switch (action.type) {
        case "ADD":
            return [...state, (<post>action.payload)]
        case "REMOVE":
            return state.filter(p => p.id != (<number>action.payload))
        default:
            throw new Error("unknown action type")
    }
}

export default postReducer;