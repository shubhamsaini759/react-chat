import React from 'react'
import '../../Styles/Chat/RightChatBox.css'


import AfterLogin from '../../Pages/Chat/ChatRightSide/AfterLogin'
import ChatClicked from '../../Pages/Chat/ChatRightSide/ChatClicked';



const RightChatBox = (props) => {




  return (
    <div className='right-chat-box'>
      {
        props.flag?
          <ChatClicked contact={props.contact}  />
          :
          <AfterLogin /> 
      }
    </div>
  )
}

export default RightChatBox