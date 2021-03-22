import React, {useContext} from 'react';
import styled from "@emotion/styled";
import PostCreatorMolecule from "../../molecules/postCreator";
import {PostContext} from "../../../contexts/postContext";
import PostCardMolecule from "../../molecules/postCard";

const Posts = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`

const PostsOrganism = () => {

    const {postState} = useContext(PostContext);

    return (
        <Posts>
            <PostCreatorMolecule/>
            {postState?.reverse().map(e => (
                <PostCardMolecule key={e.id} message={e.message} id={e.id as number}/>
            ))}
        </Posts>
    );
};

export default PostsOrganism;
