import React from 'react'
import styled, { keyframes } from 'styled-components'

const Styledh1 = styled.h1`
    display: flex;
    width: 90%;
    margin: 1% auto;
    justify-content: center;
    color: ${pr => pr.theme.secondary};
    font-size: 3rem;
    font-weight: bolder;
    text-shadow: ${pr => pr.theme.shadow};
` 

export default function Card(props) {
    return (
        <div>
            <Styledh1>{props.title}</Styledh1>
        </div>
    )
}