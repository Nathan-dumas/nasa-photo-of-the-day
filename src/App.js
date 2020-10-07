import React, { useState, useEffect } from 'react'
import "./App.css"
import axios from 'axios'
import Card from './components/Card'

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
      <Card hdurl={nasa.hdurl} copyright={nasa.copyright} date={nasa.date} title={nasa.title} explanation={nasa.explanation}/>
    </div>
  )
}

export default App
