import React, { useState, useEffect } from 'react'
import "./App.css"
import axios from 'axios'
import Copyright from './components/Copyright'
import Description from './components/Description'
import Image from './components/Image'
import Date from './components/Date'
import Title from './components/Title'

function App() {
  
  const [nasa, setNasa] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
    <div>
      <Title title={nasa.title} />
      <Date date={nasa.date} />
      <Image hdurl={nasa.hdurl} />
      <Copyright copyright={nasa.copyright} />
      <Description explanation={nasa.explanation} />
    </div>
  )
}

export default App
