import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledParagraph = styled.p`
    display: flex;
    color: ${pr => pr.theme.primary};
    font-size: 1.6rem;
    width: 55%;
    font-weight: bolder;
    margin: 1% auto;
    background: #fdf5e6;
    box-shadow: 5px 10px 16px 5px rgba(0,0,0,0.67);
    text-shadow: ${pr => pr.theme.shadow};
    padding: 1%;
    border-radius: 25px;
    `

export default function Description(props) {
    return (
        <div>
            <StyledParagraph>{props.explanation}</StyledParagraph>
        </div>
    )
}