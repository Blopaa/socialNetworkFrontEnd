import styled from '@emotion/styled'
import React from 'react'
import InputAtom from './src/components/atoms/input'
import SignUpFormMolecule from './src/components/molecules/SignUpForm'
import SignUpPage from './src/pages/auth/SignUp'

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    background-color: #f6f6f6;
`


const App = () => {
    return (
        <Container>
            <SignUpPage/>
        </Container>
    )
}

export default App
