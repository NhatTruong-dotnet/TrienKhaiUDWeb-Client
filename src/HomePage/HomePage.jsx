import Conversation from '../Chat/Conversation'
import Sidebar from '../Page/BooksPage/Components/Sidebar/Sidebar'
import ListBook from '../Common/ListBook/ListBook'
import './homepage.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function HomePage() {
  const [conversations, setConversations] = useState([]);
  const arr1 = [
    {
      id: 1,
      label: 'Sách tiếng Việt',
      value: 1,
    },
    {
      id: 2,
      label: 'Thiếu nhi',
      value: 2,
    },
    {
      id: 3,
      label: 'Văn học',
      value: 3,
    },
  ]
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("https://serverbookstore.herokuapp.com/api/conversations/builehoangnhattruong@gmail.com");
        setConversations(res.data[0].messages);
      } catch (error) {
        console.log(error);
      }
    }
    getConversations();
  })

  return (
    <>

      <div >
        <div className='container'style={{maxWidth:"1200px", margin:"0px auto"}}>
          <div className="row" >
            <div className='col-3'>
              <Sidebar />
            </div>
            <div className='col-9'>
              <ListBook />
            </div>
          </div>
        </div>

        <Conversation />

      </div>

    </>


  )
}
