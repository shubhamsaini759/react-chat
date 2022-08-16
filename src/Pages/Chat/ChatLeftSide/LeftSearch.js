import React, { useEffect, useState } from 'react'
import '../../../Styles/Chat/LeftSearch.css'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import api from '../../../Utills/api';

const LeftSearch = (props) => {
    

  return (
    <>
    <div className='left-search'>
        <div className='left-search-icon'>
            <SearchIcon sx={{color: '#a5e5ff'}} />
        </div>
        <div className='left-search-box'>
            <InputBase id="outlined-search"  
                sx={{ color : '#a5e5ff',  width : 300}}  
                placeholder="search or start new chat"
                onChange={(e)=>{props.setSearchItem(e.target.value);props.setFlag(true)}}
            />
        </div>
    </div>
    </>
  )
}

export default LeftSearch