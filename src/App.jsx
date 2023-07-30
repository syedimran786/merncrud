import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddUsers from './components/AddUsers'
import UpdateUser from './components/UpdateUser'
import GetUsers from './components/GetUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='adduser' element={<AddUsers/>}/>
        <Route path='/updateuser/:id' element={<UpdateUser/>}/>
        <Route path='/getusers' element={<GetUsers/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
