import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from './pages'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/signin' element={<SignIn />} />
                {/* <Route path='/chat' /> */}
            </Routes>
        </div>
    )
}

export default Router;
