import React from 'react';
import styled from "@emotion/styled";

const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div{
    margin: 10px;
    width: 70px;
    height: 70px;
    border: 10px solid #F6F6F6;
    border-radius: 50%;
    border-top: 10px solid #834FE3;
    animation-name: girar;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }
  @keyframes girar {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`

const LoadingAtom = () => {
    return (
        <Loading>
            <div></div>
        </Loading>
    );
};

export default LoadingAtom;
