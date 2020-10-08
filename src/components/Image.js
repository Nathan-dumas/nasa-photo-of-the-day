import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledImg = styled.img`
    width: 35%;
    display: flex;
    margin: 0 auto;
    box-shadow: 5px 10px 16px 5px rgba(0,0,0,0.5);
    border-radius: 25px;
    border: 3px solid white;
`

export default function Image(props) {
    return (
        <StyledImg src={props.hdurl} alt="NASA potd" />
    )
}