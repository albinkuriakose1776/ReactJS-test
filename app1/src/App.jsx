import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Reg from './components/Reg'
import TableData from './components/TableData'
import CardData from './components/CardData'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/r' element={<Reg/>}/>
      <Route path='/t' element={<TableData/>}/>
      <Route path='/c' element={<CardData/>}/>
      <Route path='/s' element={<StateBasics/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
