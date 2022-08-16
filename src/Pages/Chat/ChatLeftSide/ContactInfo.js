import React from 'react'
import '../../../Styles/Chat/ContactInfo.css'

// import DoneIcon from '@mui/icons-material/Done';

const ContactInfo = (props) => {

  
  return (
    <>
        <div className='chat-left-user-namemsg' >
                    <div className='chat-left-user-data'>
                        <p id='contactName'>{props.contact.contactname}</p>   
                        <div className='chat-left-user-seen'>
                            {/* <DoneIcon fontSize='small' sx={{color : '#a5e5ff'}} /> */}
                            {/* <p>hello</p> */}
                        </div>  
                    </div>   
                    <div className='chat-left-user-time'>
                        {/* <p>17:36</p> */}
                    </div>            
        </div>
    </>
  )
}

export default ContactInfo