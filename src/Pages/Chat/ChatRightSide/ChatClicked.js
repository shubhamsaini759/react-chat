import React, { useEffect, useState } from 'react'
import '../../../Styles/Chat/ChatClicked.css'

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { InputBase } from '@mui/material'
import Messages from './Messages';

import drake from '../../../Assets/Images/drake.jpeg';
import api from '../../../Utills/api';

import { socket } from '../../../Utills/socket';

const ChatClicked = (props) => {

    const[ message,setMessage] = useState([]);
    const [ sendText, setSendText ] = useState('');
    const [flag, setFlag ] = useState(false)

    useEffect(()=>{
        api
            .get('messages/'+props.contact.contactId,{ headers : { Authorization  : `${localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                console.log(result)
                setMessage(result.data.data.messages)
            })
            .catch((err) => console.log(err,'chatClickedErr'))
    },[props.contact,flag])

    const sendHandler = () =>{
        socket.emit('message',{contactId : props.contact.contactId,
                    message : sendText
        })
        setSendText('')
        setFlag(x=>!x)
    
    }

    // socket.on('message',(abcd)=>console.log(abcd))
  return (
        <div className='chat-clicked'>
            <div className='chat-clicked-top'>
                <div className='chat-clicked-top-profile'>
                    <img src={drake} alt='user-img' />
                </div>
                <div className='chat-clicked-top-data'>
                    <div className='chat-clicked-top-name'>
                        <h5>{props.contact.contactname}</h5>
                        <p>Click here for the info</p>
                    </div>
                    <div className='chat-clicked-top-icon'>
                        <SearchIcon sx={{ color : '#a5e5ff',pr : 3}}/>
                        <MoreVertIcon sx={{ color : '#a5e5ff'}} />
                    </div>
                </div>
            </div>
            
            <div className='chat-clicked-mid'>
                <Messages message={message} />
            </div>

            <div className='chat-clicked-bottom'>
                <div className='text-emoji'>
                    <EmojiEmotionsIcon  sx={{ ml : 2,color : '#a5e5ff'}}/>
                </div>
                <div className='text-file'>
                    <AttachFileIcon sx={{ml:1,color : '#a5e5ff'}} />
                </div>
                <div className='text-write'>
                    <InputBase id="outlined-searched" onChange={(e)=>setSendText(e.target.value)} 
                                value={sendText}
                                sx={{ backgroundColor : '#5d6c75', ml:1, color: '#a5e5ff', width : 800,height : 40,borderRadius :2}}  
                                placeholder="Type a message" />
                </div>
                <div className='text-send'>
                    <SendIcon sx={{ mr: 2,color : '#a5e5ff',cursor : 'pointer'}} onClick={sendHandler} />
                </div>
            </div>
        </div>
  )
}

export default ChatClicked