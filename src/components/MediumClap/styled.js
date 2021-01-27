import styled from 'styled-components'

export const StyledClap = styled.button`
    position: relative;
    outline: 1px solid transparent;
    border-radius: 50%;
    border: 1px solid #bdc3c7;
    width: 80px;
    height: 80px;
    background: none;
    user-select: none;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 50%;
        width: 79px;
        height: 79px;
    }

    &:hover {
        cursor: pointer;
        border: 1px solid #27ae60;
        transition: border-color 0.3s ease-in;

        &:after {
            animation: shockwave 1s ease-in infinite;
        }
    }

    @keyframes shockwave {
        0% {
            transform: scale(1);
            box-shadow: 0 0 2px #27ae60;
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
            box-shadow: 0 0 50px #145b32, inset 0 0 10px #27ae60;
        }
    }
`
export const StyledCount = styled.span`
    position: absolute;
    top: -50px;
    left: 20px;
    font-size: 0.8rem;
    color: white;
    background: #27ae60;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    line-height: 40px;
`
export const StyledTotal = styled.span`
    position: absolute;
    font-size: 0.8rem;
    width: 80px;
    text-align: center;
    left: 0;
    top: -22px;
    color: #bdc3c7;
`
export const StyledClapIcon = styled.span`
    svg {
        width: 40px;
        fill: none;
        stroke: #27ae60;
        stroke-width: 2px;

        &.checked {
            fill: #27ae60;
            stroke: #fff;
            stroke-width: 1px;
        }
    }
`
