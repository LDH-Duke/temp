import React from 'react'
import { Space, Form, Input, Button } from 'antd'
import './Chat.css'

const ChatPresenter = (
  {
    //States
    msg,
    msgList,
    messageRef,
    //Function
    onChangeMsg,
    onSubmitMsg,
  }
) => {
  return (
    <div id='chat-container'>
      <div className='chat-box'>
        <div className='chat-wrap'>
          <div className='chat-title'>
            <span className='title'>사용자 아이디</span>
          </div>
          <div className='chat-contents'>
            <ul className='chat'>
              {/* msgList.map으로 대화내용 li 로 표시 */
                msgList.map((v,i)=>v.type ==='welcome'?
                (
                  <li className='welcome'>
                    <div className='line'/>
                    <span>{v.msg}</span>
                    <div className='line' />
                  </li>
                ):(
                  <li className={v.type} key={`${i}_li`}>
                    <div className='userId'>
                      {v.id}
                    </div>
                    <div className={v.type}>
                      {v.msg}
                    </div>
                  </li>
                )
                )
              }
              <li ref={messageRef} />
            </ul>
          </div>
          <div className='chat-form'>
            <Form style={{ display: 'flex' }} onFinish={onSubmitMsg}>
              <Form.Item style={{ flex: 1 }}>
                <Input size='large' placeholder='Input Message!!' onChange={onChangeMsg} value={msg}/>
              </Form.Item>
              <Form.Item>
                <Button className='chat-btn' size='large' type='primary' htmlType='submit'>전송</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPresenter