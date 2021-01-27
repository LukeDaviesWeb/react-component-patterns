/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ClapCount } from '../ClapCount'
import { CountTotal } from '../CountTotal'
import { ClapIcon } from '../ClapIcon'

import { useClapAnimation } from '../../hooks/useClapAnimation'

import { StyledClap } from '../MediumClap/styled'

export const MediumClapWithHook = ({ ...props }) => {
    const MAXIMUM_USER_CLAP = 50
    const [count, setCount] = useState(0)
    const [countTotal, setCountTotal] = useState(209)
    const [isClicked, setIsClicked] = useState(false)

    const animationTimeline = useClapAnimation()

    const handleOnClick = () => {
        setCount((prevState) => Math.min(prevState + 1, MAXIMUM_USER_CLAP))
        setCountTotal((prevState) => (count < MAXIMUM_USER_CLAP ? prevState + 1 : countTotal))
        setIsClicked(true)
        animationTimeline.replay()
    }

    return (
        <StyledClap onClick={handleOnClick} id="clap">
            <ClapIcon isClicked={isClicked} />
            <ClapCount count={count} />
            <CountTotal countTotal={countTotal} />
        </StyledClap>
    )
}

/*
 ** PROPTYPES
 */
MediumClapWithHook.propTypes = {
    animationTimeline: PropTypes.object,
    ref: PropTypes.object
}
