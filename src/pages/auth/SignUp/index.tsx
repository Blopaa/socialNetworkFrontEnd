import styled from '@emotion/styled';
import React from 'react';
import SignUpFormMolecule from '../../../components/molecules/signUpForm';

const Container = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 16.625rem);
  width: calc(100% - 8rem);
`;

const SignUpPage = () => {
    return (
        <Container>
            <SignUpFormMolecule/>
        </Container>
    );
};

export default SignUpPage;