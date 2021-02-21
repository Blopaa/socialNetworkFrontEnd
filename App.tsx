import styled from '@emotion/styled'
import React from 'react'
import InputAtom from './src/components/atoms/input'

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    background-color: #f6f6f6;
`


const App = () => {
    return (
        <Container>
            Hello world :D
            <InputAtom name="blas"/>
        </Container>
    )
}

export default App
