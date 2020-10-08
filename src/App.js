import React, { useState, useEffect } from 'react'
import "./App.css"
import axios from 'axios'
import Copyright from './components/Copyright'
import Description from './components/Description'
import Image from './components/Image'
import Date from './components/Date'
import Title from './components/Title'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: '#191b1d';
`

function App() {
  
  const [nasa, setNasa] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=2bHhvmdDhzTVho3u286vvl6AWx6e041Zh8OAuo7M')
      .then(res => {
        setNasa(res.data)
      })
      .catch(err => {
        debugger
      })
    }
    fetchData()
  }, [])



  return (
    <StyledDiv>
      <Title title={nasa.title} />
      <Image hdurl={nasa.hdurl} />
      <Date date={nasa.date} />
      <Copyright copyright={nasa.copyright} />
      <Description explanation={nasa.explanation} />
    </StyledDiv>
  )
}

export default App
