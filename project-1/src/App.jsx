import React from 'react'
import './App.css'
import { useState } from 'react'
import { Data } from './components/data'
import { Studentcard } from './components/Studentcard'
const App = () => {

  const [data,setData] = useState(Data)
  
  return (
    <div className='container'>
      <h1>{data.length} - Members</h1>
      <Studentcard  data={data}/>
    <div className='clearAllDiv'>
      <button onClick={()=>setData([])}>ClearAll</button>
    </div>
    </div>
  )
}

export default App