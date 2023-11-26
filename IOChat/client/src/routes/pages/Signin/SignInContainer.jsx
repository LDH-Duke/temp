import React, { useState } from 'react';
import SignInPresenter from './SignInPresenter';
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../../../redux/store';

// const webSocket = io.connect('http://localhost:5000')

const SignInContainer = ({webSocket}) => {
    const navigate = useNavigate();
    const [account, setAccount] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    let dispatch = useDispatch()
    let userid = useSelector((state)=> state.account)

    // const webSocket = props

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
        setIsLogin(true)
        webSocket.emit('login', account)
        
        dispatch(setUserId(account))
        console.log('연결', isLogin)
        navigate('/chat')
    }

    


    return (
        <SignInPresenter userid={userid} account={account} onAccountChange={handleAccountChange} onConnectSocket={handleConnectChat} />
    )
}

export default SignInContainer;
