import {getRequest, postRequest} from "./baseRequest";
import {post} from "../../types/generic";

export const getPosts = async (order: number, header: {}) => {
    return await getRequest("/post/posts/"+ order, header);
}

export const createPost = async (post: post, header: {}) => {
    return await postRequest('/post', post, header)
}