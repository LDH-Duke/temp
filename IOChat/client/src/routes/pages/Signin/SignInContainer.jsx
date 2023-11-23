import React from 'react'
import SignInPresenter from './SignInPresenter'
import { useNavigate } from 'react-router-dom'

const SignInContainer = () => {
    const navigate = useNavigate();
    /**
     * siginin 핸들러
     */
    const handleSignIn = async (userInfo) => {
        console.log(userInfo)
    }

    /**
     * signup 페이지 이동
     */
    const handleMoveSignUp = () => {
        navigate('/signup');
    }

    return (
        <SignInPresenter handleSignIn={handleSignIn} handleMoveSignUp={handleMoveSignUp} />
    )
}

export default SignInContainer;
