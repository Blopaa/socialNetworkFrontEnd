import React, {useContext, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {CgProfile} from 'react-icons/cg'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {BiTrashAlt, FaRegCommentAlt} from "react-icons/all";
import {profile} from "../../../../types/generic";
import {fadeIn} from "../../../styles/animations";
import {giveLike} from "../../../services/userServices";
import {AuthContext} from "../../../contexts/authContext";
import ButtomAtom from "../../atoms/button";
import {deletePost} from "../../../services/postServices";
import {Link} from 'react-router-dom'

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
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5%;
    height: 1px;
    width: 90%;
    border-bottom: 1px solid #CCCCCC;
    margin-bottom: .5rem;
  }

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
  margin: 2rem;
  transition: .3s all;
  animation: ${fadeIn} .3s ease forwards;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: #e8eff5;
  box-shadow: 7px 7px 15px #bbcfda, -4px -4px 13px #fff,
  inset 4px 4px 8px rgba(209, 217, 230, 0.2),
    inset -8px -8px 8px rgba(255, 255, 255, 0.2);

  border-radius: 1rem;
  margin-bottom: 0;

  a {
    text-decoration: inherit;
    color: inherit;
  }
  
  &:hover{
    transform: translateY(.5rem);
  }
`

const CardTools = styled.div`
  display: flex;
  justify-content: left;
  padding: 0 4.5rem;
  padding-bottom: 2rem;

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

  div {
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
                    <Link to={`/${profile.nickname}`}>
                <span>
                    <CgProfile/>
                </span>
                    </Link>
                    <div><Link to={`/${profile.nickname}`}><h5>{profile.nickname}</h5></Link><Link to={`/post/${id}`}>
                        <p>{message}</p></Link></div>
                    {own && <OwnTools>
                        <button onClick={() => setShow(!show)}><BiTrashAlt/></button>
                    </OwnTools>}
                </PostCard>
                    <CardTools>
                        <button onClick={handleLike}>{liked ? <AiFillHeart color={"red"}/> : <AiOutlineHeart/>}</button>
                        <button><FaRegCommentAlt/></button>
                    </CardTools></> : <Options show={show}>
                    <p>Are you sure yo want to delete it?</p>
                    <div>
                        <ButtomAtom type={"button"} size={"l"} stetic={"soft"}
                                    onClick={() => setShow(!show)}>Cancel</ButtomAtom>
                        <ButtomAtom type={"button"} size={"l"} stetic={"soft"} onClick={handleDelete}>Delete</ButtomAtom>
                    </div>
                </Options>
                }
            </Container>
        );
    }
;

export default PostCardMolecule;
