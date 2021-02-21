import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import ButtomAtom from '../../atoms/button';
import InputAtom from '../../atoms/input';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
    width: 31.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 100%;
    font-size: 2rem;
    text-align: left;
    font-weight: bold;
  }
`;

const SignUpFormMolecule = () => {
  const [signUpForm, setSignUpForm] = useState({});
  const [passwordRep, setPasswordRep] = useState({});

  return (
    <Container>
      <p>Sign Up</p>
      <Form>
        <InputAtom
          name="nickname"
          sendValue={setSignUpForm}
          lastFormValue={signUpForm}
          formType="text"
        />
        <InputAtom
          name="email"
          sendValue={setSignUpForm}
          lastFormValue={signUpForm}
          formType="text"
        />
        <InputAtom
          name="password"
          sendValue={setSignUpForm}
          lastFormValue={signUpForm}
          formType="password"
        />
        <InputAtom
          name="repeat Password"
          sendValue={setPasswordRep}
          lastFormValue={passwordRep}
          formType="password"
        />
        <ButtomAtom type="submit" size="xl" stetic="auth">
          Submit
        </ButtomAtom>
      </Form>
    </Container>
  );
};

export default SignUpFormMolecule;
