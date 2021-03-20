import styled from '@emotion/styled';
import React from 'react';
import SignUpFormMolecule from '../../../components/molecules/signUpForm';
import {Link} from 'react-router-dom';
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

  @media (max-width: 450px) {
    margin: .5rem;
    width: calc(100% - 1rem);
    height: calc(100vh - 9.624rem);
  }
`;

const SignUpPage = () => {
    return (
        <Container>
            <SignUpFormMolecule/>
            <p>Already have an account? <Link to="/auth/signin">Sign in</Link> </p>
        </Container>
    );
};

export default SignUpPage;