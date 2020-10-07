import React from 'react'
export default function Card(props) {
    const { copyright, date, hdurl, title } = props

    return (
        <div>
            <h1>{title}</h1>
            <h2>Copyright: {copyright}</h2>
            <h2>Taken on: {date}</h2>
            <img src={hdurl} alt="NASA potd" width="50%" />
        </div>
    )
}