import styled from '@emotion/styled';
import React from 'react';
import signInFormMolecule from '../../../components/molecules/signInForm';
import SignInFormMolecule from "../../../components/molecules/signInForm";

const Container = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 8rem);
  height: calc(100vh - 16.625rem);
`;

const SignInPage = () => {
    return (
        <Container>
            <SignInFormMolecule />
        </Container>
    );
};

export default SignInPage;