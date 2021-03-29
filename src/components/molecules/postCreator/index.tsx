import React, {FormEvent, useContext, useEffect} from 'react';
import styled from "@emotion/styled";
import ButtomAtom from "../../atoms/button";
import useForm from "../../../hooks/useForm";
import {getProfile} from "../../../services/userServices";
import {AuthContext} from "../../../contexts/authContext";
import {post} from "../../../../types/generic";
import {createPost} from "../../../services/postServices";
import {usePosts} from "../../../hooks/usePosts";

const PostCreator = styled.div`
  margin: 2rem;
  background-color: #F6F6F6;
  max-height: 15.5625rem;
  width: calc(100% - 4rem);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.25), inset -10px -10px 30px rgba(255, 255, 255, 0.25), inset 10px 10px 30px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  h3 {
    font-size: 2.225rem;
    margin: 0;
    color: #333333;
    width: 100%;
    text-align: left;
  }

  textarea {
    border: none;
    background-color: #F6F6F6;
    box-shadow: inset 10px 10px 30px rgba(0, 0, 0, 0.05), inset -10px -10px 30px #FFFFFF;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 1rem;
    outline: none;
    resize: none;

    ::placeholder {
      color: rgba(51, 51, 51, 0.8);
    }

    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    padding: 1rem;
    color: #333333;
    font-family: sans-serif;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    box-sizing: border-box;
    min-height: 2.375rem;
  }
  form div {
    display: flex;
    align-items: center;
    p{
      margin-left: 3rem;
      color: #333333;
      font-weight: bold;
      font-family: sans-serif;
    }
  }
  
  span{
    color: #f6f6f6;
    background-color: crimson;
  }
`

const PostCreatorMolecule: React.FC<{fetchPosts: () => void}> = ({fetchPosts}) => {

    const {value, handleInputChange} = useForm({
        textarea: ''
    })

    const textarea = (value as { textarea: string }).textarea
    const {authState, authDispatch} = useContext(AuthContext);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const profile = await getProfile({"auth-token": authState?.token})
        if (textarea && textarea.length <= 216) {
            const newPost: post = {message: (value as { textarea: string }).textarea, profile: profile.data};
            (value as { textarea: string }).textarea = '';
            await createPost(newPost, {"auth-token": authState?.token})
            await fetchPosts();
        }
    }

    return (
        <PostCreator>
            <h3>Post something</h3>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="write here" value={textarea} onChange={handleInputChange} name="textarea"><span>hi</span></textarea>
                <div><ButtomAtom type={"submit"}
                                 size={"l"}
                                 stetic={"auth"}>Post</ButtomAtom><p>{textarea.length}/216</p></div>
            </form>
        </PostCreator>
    );
};

export default PostCreatorMolecule;
