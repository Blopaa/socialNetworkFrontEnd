import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import PostCreatorMolecule from "../../molecules/postCreator";
import PostCardMolecule from "../../molecules/postCard";
import {getPosts} from "../../../services/postServices";
import {AuthContext} from "../../../contexts/authContext";
import {post} from "../../../../types/generic";
import {usePosts} from "../../../hooks/usePosts";

const Posts = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`

const PostsOrganism = () => {
    const {posts, counter, setCounter, fetchPosts} = usePosts()

    const handleScroll = async (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const bottom = (e.target as Element).scrollHeight - ((e.target as Element).scrollTop) === (e.target as Element).clientHeight;
        if (bottom && counter >= 1) {
            await fetchPosts()
        }
    }

    return (
        <Posts onScroll={handleScroll}>
            <PostCreatorMolecule fetchPosts={fetchPosts}/>
            {posts.map((e, i) => (
                <PostCardMolecule key={e.id} message={e.message} id={e.id as number} profile={e.profile}/>
            ))}
        </Posts>
    );
};

export default PostsOrganism;
