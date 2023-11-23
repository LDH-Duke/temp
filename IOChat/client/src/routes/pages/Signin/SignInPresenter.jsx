import React from 'react'
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignInPresenter = ({ handleSignIn, handleMoveSignUp }) => {

    /**
     * container로 유저정보 전송
     * @param {Object} userInfo 
     */
    const signin = async (userInfo) => {
        await handleSignIn(userInfo)
    }

    return (
        <div id='signin-container'>
            <div className='signin-box'>
                <div className='signin-wrap'>
                    <div className='form-title'>
                        <Link className='title' to='/signin'>
                            Sign In
                        </Link>
                    </div>

                    <div className='form-wrap'>
                        <Form onFinish={signin}>
                            <Form.Item name='user-account'>
                                <Input size='large' placeholder='Account' />
                            </Form.Item>
                            <Form.Item size='large' name='user-pw'>
                                <Input.Password placeholder='Password' />
                            </Form.Item>
                            <Button className='signin-button' type='primary' htmlType='submit'>Sign in</Button>
                            <Button type='link' onClick={handleMoveSignUp}>Sign up</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPresenter;