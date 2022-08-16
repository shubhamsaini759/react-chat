import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatIndex from '../Components/Chat/ChatIndex'
import Login from '../Components/Login/Login'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/home' element={<ChatIndex /> } />
    </Routes>
  )
}

export default Routing