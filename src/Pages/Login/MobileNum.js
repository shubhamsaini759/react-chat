import React, { useState } from 'react'
import '../../Styles/Login/MobileNum.css'

import { TextField,Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../Store/Index'


const MobileNum = (props) => {

  const dispatch = useDispatch();
  const [ name,setName ] = useState('');

  const okHandler = () =>{
    props.setFlag(true);
    dispatch( loginAction.sendName({name : name}) )
  }

 


  return (
    <>
     <p className='login-detail'>To use Whatsapp on your computer  :</p>
                <h5>Enter your email</h5>
                <p className='verify-text'>This will send an SMS message to verify your Email.<Button>What's my Email?</Button></p>
                <div className='login-mobile'>
                    
                    <TextField variant='filled' sx={{ backgroundColor : 'white' }}  helperText="" placeholder='user-name' onChange={(e)=>setName(e.target.value)} />
                    <Button variant="contained" sx={{ backgroundColor : '#dadbdd',mt : 1,ml :1, height : 45, color : 'black' }} onClick={okHandler}>ok</Button>
                </div>   
                <div className='login-help'>
                    <p>Need help to get started?</p>
                </div>
    </>
  )
}

export default MobileNum