import styled from '@emotion/styled';
import React, {FormEvent, useContext, useEffect, useReducer, useState} from 'react';
import ButtomAtom from '../../atoms/button';
import InputAtom from '../../atoms/input';
import FormErrorAtom from "../../atoms/formError";
import AuthReducer from "../../../reducers/authReducer";
import {AuthContext} from "../../../contexts/authContext";

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
    const [signInForm, setsignInForm] = useState<{Password?: string, Email?: string}>({});
    const [error, setError] = useState({message: '', error: false});
    const {dispatch, state} = useContext(AuthContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!signInForm.Password || !signInForm.Email){
            setError({message: "email and password must be fullfilled", error: true})
            return;
        }
        if(!dispatch) throw new Error("no dispatch")
        dispatch({type: "LOG_IN", payload: "token"})

    }

    useEffect(() => {
        console.log(signInForm)
    }, [signInForm]);

    return (
        <>
            <Container>
                <p>Sign In</p>
                <Form onSubmit={handleSubmit}>
                    <InputAtom
                        name="Email"
                        sendValue={setsignInForm}
                        lastFormValue={signInForm}
                        formType="text"
                        pattern="[\s\S]{1,}[@]{1}[\s\S]{1,}[.][\s\S]{1,}"
                    />
                    <InputAtom
                        name="Password"
                        sendValue={setsignInForm}
                        lastFormValue={signInForm}
                        formType="password"
                        pattern="[\s\S]{6,}"
                    />
                    <ButtomAtom type="submit" size="xl" stetic="auth">
                        Submit
                    </ButtomAtom>
                </Form>
            </Container>
            {error.error && <FormErrorAtom message={error.message}/>}
        </>
    );
};

export default SignInFormMolecule;
