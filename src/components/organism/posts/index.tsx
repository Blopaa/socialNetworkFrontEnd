import React from 'react';
import styled from "@emotion/styled";
import PostCreatorMolecule from "../../molecules/postCreator";
import PostCardMolecule from "../../molecules/postCard";
import {usePosts} from "../../../hooks/usePosts";

const Posts = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`

const PostsOrganism = () => {
    const {posts, counter, fetchPosts, liked} = usePosts()

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
                <PostCardMolecule key={e.id} message={e.message} id={e.id as number} profile={e.profile}
                                  isLiked={!!liked.find(z => z.id == e.id)}/>
            ))}
        </Posts>
    );
};

export default PostsOrganism;
