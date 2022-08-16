import React from 'react'
import '../../../Styles/Chat/AfterLogin.css'


import start from '../../../Assets/Images/whatsapp.png'
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material'

const AfterLogin = () => {
  
  return (
    <>
      <div className='after-login-box-img'>
            <img src={start} alt='whatsapp' />
        </div>
        <div className='after-login-box-text'>
            <p id='after-login-box-text-heading'>WhatsApp Web</p>
            <p id='after-login-box-text-lines'>Now send and receive messages without keeping your phone online.</p>
            <p>Use WhatsApp on up to 4 linked devices ans 1 phone at the same time.</p>
        </div>
        <div className='after-login-box-calls'>
            
            <p>Make calls from desktop with whatsapp for Windows.<span><Button>Get it here.</Button></span></p>
            <div className='after-login-encryption-text'>
               <LockIcon  /><p>End-to-end encryption</p>
            </div>
            <div className='after-login-copyrights'>
              <p>© 2022 | shubham saini | sanamdeep</p>
            </div>
        </div>

    </>
  )
}

export default AfterLogin