import { createContext, useState } from 'react'
import axios from 'axios'

export const Context = createContext()

function Provider({ children }) {
    const [newMessageCome, setNewMessageCome] = useState(false)
    const [sendToClient, setSendToClient] = useState(false)
    const fetchData = async message => {
        try {
            if (message === 'admin') {
        console.log('fetch admin');

            setNewMessageCome(!newMessageCome)
                
            }else{
        console.log('fetch client');
                setSendToClient(!sendToClient)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        sendToClient,
        newMessageCome,
        fetchData,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
