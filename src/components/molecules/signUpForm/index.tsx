import styled from '@emotion/styled';
import React, {FormEvent, useContext, useEffect, useState} from 'react';
import ButtomAtom from '../../atoms/button';
import InputAtom from '../../atoms/input';
import {AuthContext} from "../../../contexts/authContext";
import FormErrorAtom from "../../atoms/formError";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 31.25rem;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
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
    const [signUpForm, setSignUpForm] = useState<{ Password?: string, Email?: string, Nickname?: string }>({});
    const [passwordRep, setPasswordRep] = useState<{ "Repeat Password"?: string }>({});
    const [error, setError] = useState({message: '', error: false});
    const {dispatch, state} = useContext(AuthContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!signUpForm.Password || !signUpForm.Email || !signUpForm.Nickname) {
            setError({message: "nickname, email and password must be fullfilled", error: true})
            return;
        }
        if (passwordRep["Repeat Password"] != signUpForm.Password) {
            setError({message: "both passwords must be the same", error: true})
            return;
        }
        if (!dispatch) throw new Error("no dispatch")
        dispatch({type: "LOG_IN", payload: "token"})
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                <p>Sign Up</p>
                    <InputAtom
                        name="Nickname"
                        sendValue={setSignUpForm}
                        lastFormValue={signUpForm}
                        formType="text"
                    />
                    <InputAtom
                        name="Email"
                        sendValue={setSignUpForm}
                        lastFormValue={signUpForm}
                        formType="text"
                        pattern="[\s\S]{1,}[@]{1}[\s\S]{1,}[.][\s\S]{1,}"
                    />
                    <InputAtom
                        name="Password"
                        sendValue={setSignUpForm}
                        lastFormValue={signUpForm}
                        formType="password"
                        pattern="[\s\S]{6,}"
                    />
                    <InputAtom
                        name="Repeat Password"
                        sendValue={setPasswordRep}
                        lastFormValue={passwordRep}
                        formType="password"
                        pattern="[\s\S]{6,}"
                    />
                    <ButtomAtom type="submit" size="xl" stetic="auth">
                        Submit
                    </ButtomAtom>
                </Form>
            </Container>
            {error.error && <FormErrorAtom message={error.message} bottom/>}
        </>
    );
};

export default SignUpFormMolecule;
