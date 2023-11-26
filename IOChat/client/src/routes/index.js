import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SignIn, Chat } from './pages'
import { io } from 'socket.io-client'

const webSocket = io.connect('http://localhost:5000')

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate replace to='/signin'/>} />
                <Route path='/signin' element={<SignIn webSocket={webSocket}/>} />
                <Route path='/chat'  element={<Chat webSocket={webSocket}/>}/>
            </Routes>
        </div>
    )
}

export default Router;
