import React, { useState } from 'react';
import SignInPresenter from './SignInPresenter';
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client'

// const webSocket = io.connect('http://localhost:5000')

const SignInContainer = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    /**
     * siginin 핸들러
     */
    const handleAccountChange = (userAccount) => {
        setAccount(userAccount);
        console.log(account)
    }

    /**
     * socket 연결 핸들러
     */
    const handleConnectChat = (e) =>{
        // webSocket.emit('login', account)
        setIsLogin(true)
        console.log('연결', isLogin)
        navigate('/chat')
    }


    return (
        <SignInPresenter account={account} onAccountChange={handleAccountChange} onConnectSocket={handleConnectChat} />
    )
}

export default SignInContainer;
