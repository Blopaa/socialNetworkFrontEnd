import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import {CgProfile} from 'react-icons/cg'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentAlt} from "react-icons/all";
import {profile} from "../../../types/generic";
import {fadeIn} from "../../styles/animations";
import {giveLike} from "../../services/userServices";
import {AuthContext} from "../../contexts/authContext";

interface PostCardProps {
    message: string;
    id: number;
    profile: profile;
    isLiked: boolean;
}

const PostCard = styled.div`
  display: grid;
  grid-template-columns: 2.5rem auto;
  column-gap: 1rem;
  padding: 2rem;

  div {
    display: flex;
    justify-content: left;
    flex-direction: column;

    * {
      margin: 0;
      font-family: sans-serif;
      color: #333333;
    }

    p {
      white-space: pre-wrap;
      margin-top: 1rem;
    }

    h5 {
      font-size: 1.125rem;
      font-weight: bold;
    }
  }

  span {
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
`
const Container = styled.div`
  transition: .3s all;
  animation: ${fadeIn} .3s ease forwards;
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

  svg {
    font-size: 1.5rem;
  }
  button{
    cursor:pointer;
    padding: 0;
    margin-left: 1rem;
    width: auto;
    height: auto;
    background-color: transparent;
    outline: none;
    border: none;
  }
`

const PostCardMolecule: React.FC<PostCardProps> = ({message, id, profile, isLiked}) => {

    const [liked, setLiked] = useState(false);
    const {authState} = useContext(AuthContext);

    const handleLike = async () => {
        await giveLike(id, {"auth-token": authState?.token})
        setLiked(!liked);
    }

    useEffect(() => {
        if(isLiked){
            setLiked(true)
        }
    }, [isLiked]);


    return (
        <Container>
            <PostCard>
                <span><CgProfile/></span>
                <div><h5>{profile.nickname}</h5><p>{message}</p></div>
            </PostCard>
            <CardTools>
                <button onClick={handleLike}>{liked ? <AiFillHeart color={"red"}/> : <AiOutlineHeart/>}</button> <button><FaRegCommentAlt/></button>
            </CardTools>
        </Container>
    );
};

export default PostCardMolecule;
