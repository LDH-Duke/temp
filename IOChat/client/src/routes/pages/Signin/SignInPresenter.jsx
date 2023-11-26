import React from 'react'
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignInPresenter = ({ 
    userid,
    account, 
    onAccountChange,
    onConnectSocket }) => {

    /**
     * container로 유저정보 전송
     * @param {Object} userInfo 
     */
    const accountChange = (e) => {
        console.log(e.target.value)
        onAccountChange(e.target.value)
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
                        <Form onFinish={onConnectSocket}>
                            <Form.Item name='user-account'>
                                <Input size='large' placeholder='Account' onChange={accountChange} value={userid}/>
                            </Form.Item>
                            <Button className='signin-button' type='primary' htmlType='submit'>Sign in</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPresenter;