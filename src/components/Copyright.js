import React from 'react'
import styled, { keyframes } from 'styled-components'

const Styledh2 = styled.h2`
    display: flex;
    font-size: 1rem;
    color: ${pr => pr.theme.secondary};
    font-weight: bolder;
    width: 90%;
    margin: 1% auto;
    justify-content: center;
    text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
`



export default function Card(props) {
    return (
        <div>
            <Styledh2>Copyright: {props.copyright}</Styledh2>
        </div>
    )
}