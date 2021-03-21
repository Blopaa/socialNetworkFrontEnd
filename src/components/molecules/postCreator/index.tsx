import React, {FormEvent, useContext, useEffect} from 'react';
import styled from "@emotion/styled";
import ButtomAtom from "../../atoms/button";
import useForm from "../../../hooks/useForm";
import {PostContext} from "../../../contexts/postContext";

const PostCreator = styled.div`
  background-color: #FFFFFF;
  max-height: 15.5625rem;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  border: 0.5px solid #A089FA;
  box-shadow: 0 4px 4px rgba(160, 137, 250, 0.2);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

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

  p {
    white-space: pre-wrap;
  }
`

const PostCreatorMolecule = () => {

    const {postState, postDispatch} = useContext(PostContext);


    const {value, handleInputChange} = useForm({
        textarea: ''
    })

    const textarea = (value as { textarea: string }).textarea

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(textarea && postDispatch){
            postDispatch({type: "ADD", payload: {id: 1, message: (value as { textarea: string }).textarea}});
            (value as { textarea: string }).textarea = '';

        }
    }

    return (
        <PostCreator>
            <h3>Post something</h3>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="write here" value={textarea} onChange={handleInputChange} name="textarea"/>
                <ButtomAtom type={"submit"}
                            size={"l"}
                            stetic={"auth"}>Post</ButtomAtom>
            </form>
        </PostCreator>
    );
};

export default PostCreatorMolecule;
