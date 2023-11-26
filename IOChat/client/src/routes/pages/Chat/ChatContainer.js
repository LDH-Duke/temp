import React, { useEffect, useRef, useState } from 'react'
import ChatPresenter from './ChatPresenter'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'

// const webSocket = io.connect('http://localhost:5000')

const ChatContainer = ({webSocket}) => {
  const messageRef = useRef(null)
    const [msg, setMsg] = useState('')//메세지내용
    const [msgList, setMsgList] = useState([]) //대화 내용 배열

    // const webSocket = props;
    const userid = useSelector((state)=>state.account)
    //로그인여부

    useEffect(()=>{
      scrollToBottom();
    }, [msgList])

    //스크롤 바텀
    const scrollToBottom = () => {
      messageRef.current?.scrollIntoView({behavior:'smooth'})
    }

    //서버에서 전송받은 메세지
    useEffect(()=>{
      if(!webSocket) return;

      function sMessageCallback(msg){
        const {data, id} = msg;
        setMsgList((prev)=>([...prev, {msg:data, type:'other', id:id}]))
      }
      webSocket.on('sMessage', sMessageCallback);

        return () => {
          webSocket.off('sMessage', sMessageCallback)
        }
    },[])

    //fhrmdls
    useEffect(()=>{
      if(!webSocket) return;

      function sLoginCallback(msg){
        setMsgList((prev)=>([
          ...prev,
          {
            msg: `${msg} joins the chat`,
            type: 'welcome',
            id:'',
          },
        ]))
      }

      webSocket.on('sLogin', sLoginCallback)
      return() => {
        webSocket.off('sLogin', sLoginCallback)
      }
    },[])


    const handleMsgChange = (e) => {
      setMsg(e.target.value)
      console.log(msg)
    }

    const handleSubmitMsg = (e) => {
      console.log('id :' , userid)
      const sendData = {
        data : msg,
        id : userid
      };
      
      webSocket.emit('msg',sendData)
      setMsgList((prev)=>([...prev, {msg:msg , type:'me', id:userid}]))
      setMsg('')
    }

    
  return (
    <ChatPresenter
    //States
    msg={msg}
    msgList={msgList}
    messageRef={messageRef}
    //Function 
    onChangeMsg={handleMsgChange}
    onSubmitMsg = {handleSubmitMsg}
    />
  )
}

export default ChatContainer
