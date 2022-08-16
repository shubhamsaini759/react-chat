import React from 'react'
import '../../../Styles/Chat/Message.css'

const Messages = (props) => {

  return (
    <div className='message'>
      { props.message.map((x)=>

        x.type === "received" ?

            <div className='message-user'>
              <div className='message-user-box'>
                <p>
                  {x.message}
                </p>
                <p>
                  {new Date(x.at).toLocaleTimeString()}
                </p>
              </div>
            </div>
          :
            <div className='message-opposite-user'>
                <div className='message-opposite-user-box'>
                  <p>
                    {x.message}
                  </p>
                  <p>
                  {new Date(x.at).toLocaleTimeString()}
                </p>
              </div>
            </div>
        )}
      </div>
  )
}

export default Messages