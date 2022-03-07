import Conversation from '../Chat/Conversation'
import Sidebar from '../Page/BooksPage/Components/Sidebar/Sidebar'
import ListBook from '../Common/ListBook/ListBook'
import './homepage.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function HomePage() {
  const [conversations, setConversations] = useState([]);
  const [localBooks, setLocalBooks] = useState([]);
  const [globalBooks,setGlobalBooks] = useState([]);

  const url = 'https://serverbookstore.herokuapp.com/api/Books'


  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("https://serverbookstore.herokuapp.com/api/conversations/builehoangnhattruong@gmail.com");
        const bookLocalResponse = await axios.get("https://serverbookstore.herokuapp.com/api/Books/Search-Translator/local");
        setLocalBooks(bookLocalResponse.data);
        const globalResponse = await axios.get("https://serverbookstore.herokuapp.com/api/Books/Search-Translator/global");
        setGlobalBooks((globalResponse.data).slice(0,5));
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
              <ListBook listBook={localBooks} />
              <ListBook listBook={globalBooks} />
            </div>
          </div>
        </div>

        <Conversation />

      </div>

    </>


  )
}
