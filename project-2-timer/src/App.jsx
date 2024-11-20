import React from 'react'
import './App.css'
import { useTimer } from 'use-timer'
const App = () => {

  const { time,start,pause,reset,status } = useTimer()

  return (
    <div className='App'>
      
      <h1>{time}</h1>
      <br />

      {status == "RUNNING" && <p>Running.......</p>}
      <br />

      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default App