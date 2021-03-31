import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/authContext";
import {getPost} from "../services/postServices";
import {getProfile, getProfileLikes} from "../services/userServices";
import {post, profile} from "../../types/generic";

export const usePost = (id: number) => {
    let initialState = {id: 0, isLiked: false, message: "", own: false, profile: {id: 0, nickname: "", description: ""}}
    const [post, setPost] = useState<post>(initialState);
    const {authState} = useContext(AuthContext)

    const fetchPost = async () => {
        const foundPost = await getPost(id, {"auth-token": authState?.token})
        const profileLikes = await getProfileLikes({"auth-token": authState?.token})
        profileLikes.data.find((e: post) => {
             if( e.id == foundPost.data.id){
                 foundPost.data.isLiked = true
             }
        })
        const profile = await getProfile({"auth-token": authState?.token})
        if((profile.data as profile).id == (foundPost.data as post).profile.id){
            foundPost.data.own = true
        }
        setPost(foundPost.data)
    }

    useEffect(() => {
        fetchPost().then(d => null);
        return () => {
            setPost(initialState)
        }
    }, []);

    return {
        post
    }
}