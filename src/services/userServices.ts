import {getRequest, postRequest} from "./baseRequest";

export const getProfile = async (headers: {}) =>  {
    return await getRequest("/profile/find-one", headers)
}

export const giveLike = async (postId: number, header: {}) => {
    return await postRequest(`/profile/${postId}`, {}, header)
}

export const getProfileLikes = async (header: {})=>{
    return await getRequest('/profile/user-likes', header)
}