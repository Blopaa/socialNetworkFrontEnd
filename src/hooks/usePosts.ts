import {getPosts} from "../services/postServices";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/authContext";
import {post} from "../../types/generic";
import {getProfileLikes} from "../services/userServices";

export const usePosts = (initalCounter: number = 0) => {
    const [posts, setPosts] = useState<post[]>([]);
    const [liked, setLiked] = useState<post[]>([]);
    const [counter, setCounter] = useState(initalCounter);
    const {authState} = useContext(AuthContext);


    const fetchPosts = async () => {
        getPosts(counter, {"auth-token": authState?.token}).then((d) => {
            setPosts(d.data)
        })
        getProfileLikes({"auth-token": authState?.token}).then(d => {
            setLiked(d.data);
        })
        setCounter(counter + 1)
    }

    useEffect(() => {
        fetchPosts()
        return() => {
            setPosts([])
            setLiked([])
        }
    }, [])


    return {
        posts,
        counter,
        fetchPosts,
        liked
    }
}