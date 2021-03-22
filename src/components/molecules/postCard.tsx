import React from 'react';
import styled from "@emotion/styled";
import {CgProfile} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentAlt} from "react-icons/all";

interface PostCardProps {
    message: string;
    id: number;
}

const PostCard = styled.div`
  display: grid;
  grid-template-columns: 2.5rem auto;
  column-gap: 1rem;
  padding: 2rem;
  div{
    display: flex;
    justify-content: left;
    flex-direction: column;
    *{
      margin: 0;
      font-family: sans-serif;
      color: #333333;
    }
    p{
      white-space: pre-wrap;
      margin-top: 1rem;
    }
    h5{
      font-size: 1.125rem;
      font-weight: bold;
    }
  }
  span{
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: #FFFFFF;
  border: 0.5px solid #A089FA;
  box-shadow: 0 4px 4px rgba(160, 137, 250, 0.2);
  border-radius: 1rem;
  margin-top: 1rem;
`

const CardTools = styled.div`
  display: flex;
  justify-content: left;
  padding: 0 4.5rem;
  font-size: 1.5rem;
  svg{
    margin-left: 1rem;
    margin-bottom: .5rem;
  }
`

const PostCardMolecule: React.FC<PostCardProps> = ({message, id}) => {
    return (
        <Container>
            <PostCard>
                <span><CgProfile/></span>
                <div><h5>juan</h5><p>{message}</p></div>
            </PostCard>
            <CardTools>
                <AiOutlineHeart/> <FaRegCommentAlt/>
            </CardTools>
        </Container>
    );
};

export default PostCardMolecule;
