import React from 'react';
import styled from "@emotion/styled";

interface PostCardProps {
    message: string;
    id: number;
}

const PostCard = styled.div`
  max-height: 15.562rem;
  height: 100%;
  background-color: #FFFFFF;
  border: 0.5px solid #A089FA;
  box-shadow: 0 4px 4px rgba(160, 137, 250, 0.2);
  border-radius: 1rem;
  margin-top: 1rem;
`

const PostCardMolecule: React.FC<PostCardProps> = ({message, id}) => {
    return (
        <PostCard>
            <p>{message}</p>
        </PostCard>
    );
};

export default PostCardMolecule;
