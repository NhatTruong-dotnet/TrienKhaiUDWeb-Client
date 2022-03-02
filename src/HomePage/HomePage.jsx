import Book from '../Books/Components/ListBook/Book/Book'
import Conversation from '../Chat/Conversation'
import Sidebar from './components/sidebar/Sidebar'
import Silder from './components/slider/Silder'
import './homepage.css'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ListBook from '../Books/Components/ListBook/ListBook'
import Books from '../Books'

export default function HomePage() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async()=>{
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
      {/* <Silder />
      <Sidebar />
      <Book />
      <ListBook />
      <>
      </> */}
      <div >
      <Books />
      <Conversation />

      </div>
     
    </>


  )
}
