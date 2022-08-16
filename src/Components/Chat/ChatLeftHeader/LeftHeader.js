import React from 'react'
import '../../../Styles/Chat/LeftHeader.css'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SmsIcon from '@mui/icons-material/Sms';
import ChatMenu from './ChatMenu';

import sidhu from '../../../Assets/Images/sidhu.jpeg'


const LeftHeader = () => {
  return (
    <div className='left'>
        <div className='left-profile'>
            <img src={sidhu} alt='user-img' />
        </div>
        <div className='right-icons'>
            <DonutLargeIcon sx={{color:'#a5e5ff'}} />
            <SmsIcon sx={{color:'#a5e5ff',ml:3}} />
            <ChatMenu />
        </div>
    </div>
  )
}

export default LeftHeader