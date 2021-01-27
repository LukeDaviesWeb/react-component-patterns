import React from 'react'
//import { AnimatedMediumClap } from './components/MediumClap'
import { MediumClapWithHook } from './components/MediumClapWithHook'
import styled from 'styled-components'

const AppWrap = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
function App() {
    return (
        <div className="App">
            <AppWrap>
                <MediumClapWithHook />
            </AppWrap>
        </div>
    )
}

export default App
