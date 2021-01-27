import React from 'react'
import PropTypes from 'prop-types'

import { StyledTotal } from '../MediumClap/styled'

export const CountTotal = ({ countTotal }) => {
    return <StyledTotal id="clapCountTotal">{countTotal}</StyledTotal>
}

CountTotal.propTypes = {
    countTotal: PropTypes.number
}
