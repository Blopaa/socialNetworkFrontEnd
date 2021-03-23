import {getRequest} from "./baseRequest";

export const getPosts = async (order: number, header: {}) => {

    return await getRequest("/post/posts/"+ order, header);
}