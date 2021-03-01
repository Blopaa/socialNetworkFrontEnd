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
  height: calc(100% - 8rem);
  width: calc(100% - 8rem);
`;

const SignUpPage = () => {
  return (
    <Container>
      <SignUpFormMolecule />
    </Container>
  );
};

export default SignUpPage;