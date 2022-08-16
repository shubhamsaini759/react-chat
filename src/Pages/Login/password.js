import React, { useEffect, useState } from 'react'
import '../../Styles/Login/Password.css'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



import { Button,TextField } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';
import { loginAction } from '../../Store/Index'

const Password = (props) => {
    const dispatch = useDispatch();
    
    const [ pass,setPass ] = useState('');

    // const data = useSelector(state=>state.loginReducer)


    const nextHandler = () =>{
        dispatch(loginAction.sendPass({password : pass}))
        props.setSubmit(true)


        // navigate('whatsappclone')

    }

   


  return (
    <div className='password'>
        <div className='password-heading'>
            <h6>verify user-name</h6>
        </div>
        <div className='password-sms'>
            <p>Enter your  password<span>
                <Button>Forgot Password?</Button>
            </span></p>
        </div>
        <div className='password-value'>
            <TextField
            id="standard-error-helper-text"
            placeholder=""
            // defaultValue=
              helperText=""
            variant="standard"
            sx={{width: 100 }}
            onChange={(e)=>setPass(e.target.value)}
            />
            {/* <p>Enter your password</p> */}
        </div>
        <div className='password-icon'> 
            {/* <div className='password-icon-sms'>
                    <SmsIcon sx={{ color : '#5d6c75' }} />
                <div className='password-icon-sms-timer'>
                    <p>Resend SMS</p>
                    <p>0:16</p>
                </div>
            </div>
            <div className='password-icon-call'>
                    <CallIcon sx={{ color : '#5d6c75' }} />
                <div className='password-icon-call-timer'>
                    <p>Call me</p>
                    <p>0:16</p>
                </div>
            </div> */}
            <div>
                <Button variant='contained' sx={{ backgroundColor : '#c6a269', mt : 5}} onClick={nextHandler} >Next</Button>
            </div>

        </div>

    </div>
  )
}

export default Password