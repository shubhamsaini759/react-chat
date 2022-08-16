import React, { useState } from 'react'
import '../../../Styles/Chat/SearchList.css'
import api from '../../../Utills/api'

const SearchList = (props) => {


  const clickHandler = () =>{
    props.setFlag(false)

    api
      .post('addContact/'+props.details.userId,{},{headers : { Authorization : `${ localStorage.getItem('accessToken')}`}  })
      .then((result)=>{
        console.log('result')
      })
      .catch((err)=>console.log(err,'searchClickErr'))
  }

  return (
    <div className='searchlist-user-namemsg' onClick={clickHandler} >
                    <div className='searchlist-user-data'>
                        <p id='contactNames'>{props.details.username}</p>   
                    </div>   
        </div>
  )
}

export default SearchList