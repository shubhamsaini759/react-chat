import React, { useState } from 'react'
import '../../Styles/Chat/ChatIndex.css'
import LeftChatBox from './LeftChatBox'
import RightChatBox from './RightChatBox'


const ChatIndex = () => {

  const [ flag,setFlag ] = useState(false);

  const [ contact,setContact] = useState();


  return (
    <>
        <div className='chat'>
         
            <div className='chat-left'>
                <LeftChatBox setFlag={setFlag} setContact={setContact} />
            </div>
            <div className='chat-right'>
                <RightChatBox contact={contact} flag={flag} />
            </div>
        </div>
    </>
  )
}

export default ChatIndex