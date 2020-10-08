import React from 'react'
import styled, { keyframes } from 'styled-components'

const Styledh3 = styled.h3`
    display: flex;
    width: 90%;
    margin: 1% auto;
    justify-content: center;
    font-size: 1.6rem;
    color: ${pr => pr.theme.secondary};
    font-weight: bolder;
    text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
`

export default function Card(props) {
    return (
        <div>
            <Styledh3>{props.date}</Styledh3>
        </div>
    )
}