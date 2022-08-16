import React, { useEffect, useState } from 'react'
import '../../Styles/Login/Login.css'

import whatsappImg from '../../Assets/Images/logo-whatsapp.png'

import MobileNum from '../../Pages/Login/MobileNum'
import Password from '../../Pages/Login/password'
import api from '../../Utills/api'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

    const data = useSelector(state=> state.loginReducer)
    const navigate = useNavigate();
    
    const [ submit,setSubmit] = useState(false);
    const [ flag, setFlag ] = useState(false);


    useEffect(()=>{
        
        if(submit){
            api
            .post('login',data)
            .then((result)=>{
                console.log(result)
                localStorage.setItem('accessToken',result.data.data.accessToken)
                navigate('/home')
            })
            .catch((err)=>
                console.log(err)
            )

        }

    },[submit])

    
  return (
    <div className='login'>
        <div className='login-top'>
            <img src={whatsappImg} alt='whatsapp-Img' />
            <h5>Web Whatsapp</h5>
        </div>
        <div className='login-bottom'>
            <div className='login-mid'>
                { 
                flag? 
                    <Password setSubmit={setSubmit} />
                    :
                    <MobileNum setFlag={setFlag} />

                }
            </div>
        </div>
    </div>
  )
}

export default Login