import React from 'react';
import styled from "@emotion/styled";
import {fadeIn} from "../../../styles/animations";

const FormError = styled.div`
  position: relative;
  div{
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    position: absolute;
    left: 20rem;
    bottom: 0;
    background-color: #EE1B24;
    color: #F6F6F6;
    box-shadow: inset 0 0 50px 2px rgba(255, 255, 255, 0.39);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: ${fadeIn} .1s ease-in-out;
    p{
      margin: 2rem;
      font-weight: bold;
      font-family: sans-serif;
      line-height: 1.125rem;
    }
  }
`

interface FormErrorProps {
    message: string
}

const FormErrorAtom: React.FC<FormErrorProps> = ({message}) => {
    return (
        <FormError>
            <div><p>{message}</p></div>
        </FormError>
    );
};

export default FormErrorAtom;
