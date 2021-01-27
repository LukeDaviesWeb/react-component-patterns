import React from 'react'
import PropTypes from 'prop-types'
import { StyledCount } from '../MediumClap/styled'

export const ClapCount = ({ count }) => {
    return <StyledCount id="clapCount"> + {count}</StyledCount>
}

ClapCount.propTypes = {
    count: PropTypes.number
}
