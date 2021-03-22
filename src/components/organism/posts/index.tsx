import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import PostCreatorMolecule from "../../molecules/postCreator";
import {PostContext} from "../../../contexts/postContext";
import PostCardMolecule from "../../molecules/postCard";
import {getPosts} from "../../../services/postServices";
import {AuthContext} from "../../../contexts/authContext";
import {post} from "../../../../types/generic";

const Posts = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`

const PostsOrganism = () => {

    const {authState, authDispatch} = useContext(AuthContext);
    const {postState, postDispatch} = useContext(PostContext);
    const [counter, setCounter] = useState(0);
    const [posts, setPosts] = useState<post[]>([]);

    const fetchPost = () => {
        getPosts(counter, {"auth-token": authState?.token}).then((d) => {
            setPosts(d.data)
        })
        setCounter(counter + 1)
    }

    useEffect(() => {
        setCounter(1);
    }, [postState])

    useEffect(() => {
        if (counter === 0) {
            fetchPost();
            setCounter(1)
        }
    }, [counter]);


    const handleScroll = async (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const bottom = (e.target as Element).scrollHeight - ((e.target as Element).scrollTop) === (e.target as Element).clientHeight;
        if (bottom && counter >= 1) {
            fetchPost()
        }
    }

    return (
        <Posts onScroll={handleScroll}>
            <PostCreatorMolecule/>
            {(postState ? [ ...postState,...posts] : [...posts]).map((e, i) => (
                <PostCardMolecule key={i} message={e.message} id={e.id as number} profile={e.profile}/>
            ))}
        </Posts>
    );
};

export default PostsOrganism;
