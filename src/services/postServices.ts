import {deleteRequest, getRequest, postRequest} from "./baseRequest";
import {post} from "../../types/generic";

export const getPosts = async (order: number, header: {}) => {
    return await getRequest("/post/posts/" + order, header);
}

export const createPost = async (post: post, header: {}) => {
    return await postRequest('/post', post, header);
}

export const deletePost = async (id: number, header: {}) => {
    return await deleteRequest(`/post/${id}`, header);
}