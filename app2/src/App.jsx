import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StateBasics from './components/StateBasics'
import Example from './components/Example'
import Counter from './components/Counter'
import InputData from './components/InputData'
import TableData from './components/TableData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StateBasics/> */}
      {/* <Counter/>
      <Example/> */}
      <TableData/>
    </>
  )
}

export default App
