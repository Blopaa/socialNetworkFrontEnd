import {getRequest} from "./baseRequest";

export const getPosts = async (order: number, header: {}) => {
    const posts = await getRequest("/post/posts/"+ order, header)
    return posts;
}