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

const SignInFormMolecule = () => {
    const [signInForm, setsignInForm] = useState({});

    return (
        <Container>
            <p>Sign Up</p>
            <Form>
                <InputAtom
                    name="Email"
                    sendValue={setsignInForm}
                    lastFormValue={signInForm}
                    formType="text"
                />
                <InputAtom
                    name="Password"
                    sendValue={setsignInForm}
                    lastFormValue={signInForm}
                    formType="password"
                />
                <ButtomAtom type="submit" size="xl" stetic="auth">
                    Submit
                </ButtomAtom>
            </Form>
        </Container>
    );
};

export default SignInFormMolecule;
