import { useState } from 'react'
import './App.css'
import LogAndSing from './components/logandsing'

function App() {
  const [count, setCount] = useState(0)

  return (

    <LogAndSing></LogAndSing>

  )
}

export default App
