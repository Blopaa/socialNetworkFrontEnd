import styled from '@emotion/styled';
import React from 'react';
import SignUpFormMolecule from '../../../components/molecules/SignUpForm';

const Container = styled.div`
margin: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: center;
  height: 100%;
  width: 100%;
`;

const SignUpPage = () => {
  return (
    <Container>
      <SignUpFormMolecule />
    </Container>
  );
};

export default SignUpPage;