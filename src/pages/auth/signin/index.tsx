import styled from '@emotion/styled';
import React from 'react';
import signInFormMolecule from '../../../components/molecules/signInForm';
import SignInFormMolecule from "../../../components/molecules/signInForm";
import {Link} from "react-router-dom";
import {keyframes} from "@emotion/react";
import {fadeIn} from "../../../styles/animations";

const Container = styled.div`
 margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 8rem);
  height: calc(100vh - 16.625rem);
  animation: ${fadeIn} .5s ease;
`;

const SignInPage = () => {
    return (
        <Container>
            <SignInFormMolecule/>
            <p>You don't have an account? <Link to="/auth/signup">Sign up</Link></p>
        </Container>
    );
};

export default SignInPage;