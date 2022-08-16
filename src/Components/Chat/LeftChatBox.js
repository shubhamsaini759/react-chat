import React, { useEffect, useState } from 'react'
import LeftHeader from './ChatLeftHeader/LeftHeader'
import LeftSearch from '../../Pages/Chat/ChatLeftSide/LeftSearch'
import '../../Styles/Chat/LeftChatBox.css'

import FilterListIcon from '@mui/icons-material/FilterList';
import ArchiveIcon from '@mui/icons-material/Archive';
import ContactInfo from '../../Pages/Chat/ChatLeftSide/ContactInfo';

import drake from '../../Assets/Images/drake.jpeg'
import SearchList from '../../Pages/Chat/ChatLeftSide/SearchList';

import api from '../../Utills/api/'
import { socket } from '../../Utills/socket';

const LeftChatBox = (props) => {

    const [ searchItem, setSearchItem ] = useState('');

    const [ contacts, setContacts ] = useState([]);
    const[ searchList, setSearchList ] = useState([]);

    const [ flag, setFlag ] = useState(false);


    useEffect(()=>{
      api
        .get('users?search='+searchItem ,{ headers : { Authorization : `${localStorage.getItem('accessToken')}`}})
        .then((result)=>{
          setSearchList(result.data.data.users)
          console.log(result.data.data.users)
        })
        .catch((err)=>console.log(err,'searchErr'))
    },[searchItem])

    useEffect(()=>{
        api
            .get('dashboard',{ headers : { Authorization : `${ localStorage.getItem('accessToken')}`}})
            .then((result)=>{
                setContacts(result.data.data.userdata.contacts)
                socket.emit('online',result.data.data.userdata)
                    console.log(result,'dashboard')
            })
            .catch((err)=>
                console.log(err,'dashboardErr')
            )
    },[flag])

    


  return (
    <>
            <div className='chat-left-header'>
                <LeftHeader />
            </div>
            <div className='chat-left-search'>
                <LeftSearch setFlag={setFlag} setSearchItem={setSearchItem} />
                <FilterListIcon sx={{ ml :2,color : '#a5e5ff'}} />
             </div>

            {
                searchItem && flag ?

                 searchList.map((x)=>
                    <div className='searchlistdetail'>
                        <div className='searchlistdetail-user-info'>
                            <div className='searchlistdetail-user-profile'>
                                <img src={drake} alt='user-img' />
                            </div>
                            
                            <div className='searchlistdetail-user-detail' >
                                <SearchList setFlag={setFlag} details={x} />
                            </div>
                        </div> 
                    </div>
                    )
                :
                <>
                    <div className='chat-left-archive'>
                        <div className='chat-left-archive-icon'>
                            <ArchiveIcon sx={{color:'#a5e5ff',mt : 1 }} />
                        </div>
                        <div className='chat-left-archive-text'>
                                <p id='archived'>Archived</p>
                                <p id='archiverNum'>3</p>
                        </div>
                    </div> 
                    { contacts.map((x)=>
                        <div className='chat-left-user-info' onClick={()=>{props.setFlag(true);props.setContact(x)}}>
                            <div className='chat-left-user-profile'>
                                <img src={drake} alt='user-img' />
                            </div>
                            
                            <div className='chat-left-user-detail'>
                                <ContactInfo  contact={x} />
                            </div>
                        </div>  
                    )}
                </>
            }
    </>
  )
}

export default LeftChatBox