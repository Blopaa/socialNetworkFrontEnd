import styled from '@emotion/styled'
import React from 'react'
import Router from './src/router'

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    background-color: #f6f6f6;
`


const App = () => {
    return (
        <Container>
            <Router/>
        </Container>
    )
}

export default App
