import { useState } from 'react'
import Product from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product />
    </>
  )
}

export default App
