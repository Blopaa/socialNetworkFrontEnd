import {getRequest} from "./baseRequest";

export const getProfile = async (headers: {}) =>  {
    return await getRequest("/profile/find-one", headers)
}