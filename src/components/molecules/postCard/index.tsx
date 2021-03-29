import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";
import {CgProfile} from 'react-icons/cg'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {BsThreeDotsVertical, FaRegCommentAlt} from "react-icons/all";
import {profile} from "../../../../types/generic";
import {fadeIn} from "../../../styles/animations";
import {giveLike} from "../../../services/userServices";
import {AuthContext} from "../../../contexts/authContext";
import ButtomAtom from "../../atoms/button";
import {deletePost} from "../../../services/postServices";

interface PostCardProps {
    message: string;
    id: number;
    profile: profile;
    isLiked: boolean;
    own: boolean;
    fetchPost: () => Promise<void>
}

const PostCard = styled.div`
  display: grid;
  grid-template-columns: 2.5rem auto 1rem;
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

  button {
    cursor: pointer;
    padding: 0;
    margin-left: 1rem;
    width: auto;
    height: auto;
    background-color: transparent;
    outline: none;
    border: none;
  }
`

const OwnTools = styled.div`
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 0;
    width: auto;
    height: auto;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1rem;
  }
`

const Options = styled.div<{ show: boolean }>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    display: flex;
    align-items: center;
  }
`

const PostCardMolecule: React.FC<PostCardProps> = ({message, id, profile, isLiked, own, fetchPost}) => {

    const [liked, setLiked] = useState(false);
    const {authState} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    let header = {"auth-token": authState?.token};

    const handleLike = async () => {
        await giveLike(id, header)
        setLiked(!liked);
    }

    const handleDelete = async () => {
        await deletePost(id, header);
        await fetchPost();

    }

    useEffect(() => {
        if (isLiked) {
            setLiked(true)
        }
    }, [isLiked, own]);


    return (
        <Container>
            {!show ? <><PostCard>
                <span><CgProfile/></span>
                <div><h5>{profile.nickname}</h5><p>{message}</p></div>
                {own && <OwnTools>
                    <button onClick={() => setShow(!show)}><BsThreeDotsVertical/></button>
                </OwnTools>}
            </PostCard>
                <CardTools>
                    <button onClick={handleLike}>{liked ? <AiFillHeart color={"red"}/> : <AiOutlineHeart/>}</button>
                    <button><FaRegCommentAlt/></button>
                </CardTools></> : <Options show={show}>
                <p>Are you sure yo want to delete it?</p>
                <div>
                    <ButtomAtom type={"button"} size={"l"} stetic={"auth"} onClick={() => setShow(!show)}>Cancel</ButtomAtom>
                    <ButtomAtom type={"button"} size={"l"} stetic={"warning"} onClick={handleDelete}>Delete</ButtomAtom>
                </div>
            </Options>
            }
        </Container>
    );
}
;

export default PostCardMolecule;
