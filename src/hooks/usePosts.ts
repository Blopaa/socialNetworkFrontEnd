import {getPosts} from "../services/postServices";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/authContext";
import {post} from "../../types/generic";

export const usePosts = (initalCounter: number = 0) => {
    const [posts, setPosts] = useState<post[]>([]);
    const [counter, setCounter] = useState(initalCounter);
    const {authState} = useContext(AuthContext);

    const fetchPosts = useCallback(
        async () => {
            await getPosts(counter, {"auth-token": authState?.token}).then((d) => {
                setPosts(d.data)
            })
            setCounter(counter + 1)
        },[]);


    useEffect(() => {
        (async () => {
            await fetchPosts()
        })()
    }, [counter])

    return {
        posts,
        setCounter,
        counter,
        fetchPosts
    }
}